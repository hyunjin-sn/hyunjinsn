<%@page import="com.tobesoft.xplatform.data.datatype.DataType"%>
<%@ page contentType="text/html;charset=euc-kr" %>
<%@ page language="java"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>

<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>

<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>

<%@ page import="com.tobesoft.xplatform.data.ColumnHeader"%>
<%@ page import="com.tobesoft.xplatform.data.DataSet"%>
<%@ page import="com.tobesoft.xplatform.data.DataTypes"%>
<%@ page import="com.tobesoft.xplatform.data.PlatformData"%>
<%@ page import="com.tobesoft.xplatform.data.VariableList"%>
<%@ page import="com.tobesoft.xplatform.tx.HttpPlatformResponse"%>
<%@ page import="com.tobesoft.xplatform.tx.PlatformException"%>

<%
String chkType = request.getHeader("Content-Type");
//System.out.println(chkType);

if( chkType == null )
	return;

request.setCharacterEncoding("utf-8");
String contextRealPath = request.getSession().getServletContext().getRealPath("/");
String PATH = request.getParameter("PATH");
String savePath = contextRealPath + PATH;
System.out.println(">>>>>>>>>>>>>>>" + savePath);
System.out.println(savePath);
int maxSize = 500 * 1024 * 1024; // 최대 업로드 파일 크기 500MB(메가)로 제한

PlatformData resData = new PlatformData();
VariableList resVarList = resData.getVariableList();
String sMsg = " A ";
try {
	
	MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy());
	Enumeration files = multi.getFileNames(); // 파일명 모두 얻기
	
	sMsg += "B ";
	DataSet ds = new DataSet("Dataset00");
	
	ds.addColumn(new ColumnHeader("fileName", DataTypes.STRING));
	ds.addColumn(new ColumnHeader("fileSize", DataTypes.LONG));
	ds.addColumn(new ColumnHeader("fileType", DataTypes.STRING));
	ds.addColumn(new ColumnHeader("filePath", DataTypes.STRING));
	
	sMsg += "C ";

	String fileName="";

	while (files.hasMoreElements()) {
		sMsg += "D ";
		String name = (String)files.nextElement();
		fileName += multi.getFilesystemName(name);
		String type = multi.getContentType(name);
	
		File f = multi.getFile(name);
		System.out.println("fileName:"+fileName);
		
		String fileExtension = fileName.toLowerCase().substring(

				fileName.lastIndexOf(".") + 1, fileName.length());
		
		System.out.println("fileExtension " + fileExtension);
		
		int row = ds.newRow();
		ds.set(row, "fileName", fileName);
		ds.set(row, "fileType", type);
		ds.set(row, "filePath", savePath);
		
		if (f != null)
		{
			ds.set(row, "fileSize", f.length());
		}		
		sMsg += row +" ";
	}
	resData.addDataSet(ds);
	resVarList.add("ErrorCode", 200);
	//resVarList.add("ErrorMsg", savePath+"/"+fileName);
	resVarList.add("ErrorMsg", fileName);
} catch (Exception e) {
	resVarList.add("ErrorCode", -1);
	resVarList.add("ErrorMsg", sMsg + " " + e);
}

HttpPlatformResponse res = new HttpPlatformResponse(response);
res.setData(resData);
res.sendData();

%>
