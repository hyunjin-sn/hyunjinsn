/**
*  @FileName 	Excel.js 
*/

var pForm = nexacro.Form.prototype;

/**
 * @class excel export <br>
 * @param {Object} objGrid - Grid Object	
 * @param {String} [sSheetName]	- sheet name
 * @param {String} [sFileName]	- file name
 * @return N/A
 * @example
 * this.gfnExcelExport(this.grid_export, "SheetName","");
 */
pForm.gfn_excelExport = function(objGrid,  sSheetName, sFileName)
{

	this.setWaitCursor(true);
	var objGrid_excel = objGrid;
	
	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)
	
	sFileName = sFileName.replace(regExp,"");	//파일명에 특수문자 제거
	sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거
	
	//fileName nullcheck
	//sFileName = this.gfn_isNull(sFileName) ? this.gfn_getArgument("menuNm")+"_"+this.gfn_getDate() : sFileName;
	sFileName = this.gfn_isNull(sFileName) ? this.gfn_getDate() : sFileName;
	//sheetName nullcheck
	sSheetName = this.gfn_isNull(sSheetName) ? "sheet1" : sSheetName;
	//sheetName 30이상일경우 기본시트명
	if( String(sSheetName).length > 30 ){
		sSheetName =  "sheet1";
	}
	
	
	
	var svcUrl = "http://182.162.91.66:8081/web/XExportImport";
//	var svcUrl = "svcUrl::XExportImport.do";
//    var svcUrl = "http://localhost:8080/XExportImport";

//this.alert('svcUrl >>' + svcUrl);

	this.objExport = null
	this.objExport = new ExcelExportObject();
	
	this.objExport.objgrid = objGrid_excel;
	this.objExport.set_exporturl(svcUrl);
	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A1","allband","allrecord");
	this.objExport.set_exportfilename(sFileName);	
	
 	this.objExport.set_exporteventtype("itemrecord");
 	this.objExport.set_exportuitype("none");
 	this.objExport.set_exportmessageprocess("");
	this.objExport.addEventHandler("onsuccess", this.gfn_exportOnsuccess, this);	
	this.objExport.addEventHandler("onerror", this.gfn_exportOnerror, this);	
		
	var result = this.objExport.exportData();
};

/**
 * @class excel export on sucess <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfn_exportOnsuccess = function(obj, e)
{	
	//this.alert("success >> " + e.url);
	this.setWaitCursor(false);
};

/**
 * @class  excel export on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfn_exportOnerror = function(obj,  e)
{
	this.alert("Excel Export Error!!");
	this.alert(e.errormsg);
	this.setWaitCursor(false);
};

/**
 * @class  excel import( 데이터 헤더포함 ) <br>
 * @param {String} objDs - dataset	
 * @param {String} [sSheet]	- sheet name(default:Sheet1)
 * @param {String} sHead - Head 영역지정	
 * @param {String} [sBody] - body 영역지정(default A2)	
 * @param {String} [sCallback]	- callback 함수
 * @param {String} [sImportId] - import id(callback호출시 필수)	
 * @param {Object} [objForm] - form object(callback호출시 필수)
 * @return N/A
 * @example
 * this.gfnExcelImportAll("dsList","SheetName","A1:G1","A2","fnImportCallback","import",this);
 */
pForm.gfn_excelImportAll = function(objDs,sSheet,sHead,sBody,sCallback,sImportId,objForm)
{	
	this.setWaitCursor(true);    	
	
	if(this.gfn_isNull(sSheet)) sSheet = "sheet1";
	if(this.gfn_isNull(sBody)) sBody = "A2";
	if(this.gfn_isNull(sHead)) return false;
	
	var svcUrl = "http://182.162.91.66:8081/web/XExportImport";
	
//	alert("svcUrl >>" + svcUrl);
//	var svcUrl = "http://support.tobesoft.co.kr/nexacro-xeni/XExportImport";
//	var svcUrl = "svcUrl::XExportImport.do";
//    var svcUrl = "http://localhost:8080/XExportImport";
	
	var objImport ;	
	
	objImport = new nexacro.ExcelImportObject(objDs+"_ExcelImport",this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);			
	
	if (!this.gfn_isNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	objImport.addEventHandler("onsuccess", this.gfn_importAllOnsuccess, this);
	objImport.addEventHandler("onerror", this.gfn_importAllOnerror, this);	
	var sParam1 = "[Command=getsheetdata;Output=outds;Head="+sSheet+"!"+sHead+";Body="+sSheet+"!"+sBody+"]";
	var sParam2 = "["+objDs+"=outds]";


	objImport.importData("", sParam1, sParam2);						
	objImport = null;	 
};

/**
 * @class excel import on success <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfn_importAllOnsuccess = function(obj,  e)
{		
	this.setWaitCursor(false);
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	
	//화면의 callback 함수 호출
	if (!this.gfn_isNull(sCallback)) {
		if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId);
	}
};

/**
 * @class  excel import( 데이터 헤더제외 ) <br>
 * @param {String} sDataset - dataset	
 * @param {String} [sSheet]	- sheet name
 * @param {String} [sBody] - body 영역지정	
 * @param {String} [sCallback] - callback 함수	
 * @param {String} [sImportId] - import id(callback호출시 필수)	
 * @param {Object} [objForm] - form object(callback호출시 필수)	
 * @return N/A
 * @example
 * this.gfnExcelImport("dsList","SheetName","A2","fnImportCallback","import",this);
 */
pForm.gfn_excelImport = function(sDataset, sSheet, sBody, sCallback, sImportId, objForm)
{
	this.setWaitCursor(true);    	
	
	if(this.gfn_isNull(sSheet)) sSheet = "sheet1";
	if(this.gfn_isNull(sBody)) sBody = "A2";
	
	var svcUrl = "http://182.162.91.66:8081/web/XExportImport";
//	var svcUrl = "http://support.tobesoft.co.kr/nexacro-xeni/XExportImport";
//	var svcUrl = "svcUrl::XExportImport.do";
//  var svcUrl = "http://localhost:8080/XExportImport.do";
	
	var objImport;	
	objImport = new nexacro.ExcelImportObject(sDataset+"_ExcelImport",this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);			
	objImport.outds = sDataset;

	if (!this.gfn_isNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	//out dataset 생성(차후 onsucess 함수에서 헤더생성하기 위한)
	var sOutDsName = sDataset+"_outds";	
	if(this.isValidObject(sOutDsName)) this.removeChild(sOutDsName);			
	var objOutDs = new Dataset();
	objOutDs.name = sOutDsName;
	this.addChild(objOutDs.name, objOutDs);
	
	objImport.addEventHandler("onsuccess", this.gfn_importOnsuccess, this);
	objImport.addEventHandler("onerror", this.gfn_importAllOnerror, this);	
	var sParam = "[command=getsheetdata;output=outDs;body=" + sSheet + "!" + sBody +";]";
 	var sParam2 = "[" + sOutDsName + "=outDs]";
 	
	objImport.importData("", sParam, sParam2);						
	objImport = null;	
	
	this.setWaitCursor(false);
};



/**
 * @class excel import on success <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfn_importOnsuccess = function(obj,  e)
{		
	this.setWaitCursor(false);
	
	var objOutDs = this.objects[obj.outds+"_outds"];
	var objOrgDs = this.gfn_getDataSetParent(this,obj.outds,0);
	if(objOrgDs == "error"){
		this.alert("에러가 발생하였습니다. PI팀으로 연락 부탁드립니다.");
		return;
	}
	
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var objForm = obj.form;
	var sColumnId;

	//기존 데이터셋의 내용으로 헤더복사
	for (var i=0; i<objOrgDs.getColCount(); i++)
	{
		sColumnId = "Column"+i;
		if (sColumnId != objOrgDs.getColID(i))
		{
			objOutDs.updateColID(sColumnId, objOrgDs.getColID(i))
		}
	}
	
	objOrgDs.clearData();
	objOrgDs.copyData(objOutDs);

	//화면의 callback 함수 호출
	if (!this.gfn_isNull(sCallback)) {
		if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId);
	}
};

pForm.fnImportCallback = function(t){
	this.gfn_CallBackParent(this,"fn_UploadCallback",0,t);
}
pForm.gfn_CallBackParent = function(obj,call_name,cnt,sImportId){
	cnt++;
	if(obj[call_name]){
		this.lookupFunc(call_name).call(sImportId);
		return;
	}
	if(cnt > 4){
		return;
	}else{
		this.gfn_CallBackParent(obj.parent,call_name,cnt,sImportId);
	}
}
pForm.gfn_getDataSetParent = function(obj,ds_name,cnt){
	cnt++;
	if(this.gfn_isNull(obj.objects)){
		return this.gfn_getDataSetParent(obj.parent,ds_name,cnt);
	}
	for(var i=0; i<obj.objects.length;i++){
		if(obj.objects[i].name == ds_name){
			return obj.objects[i];
		}
	}
	if(this.gfn_isNull(obj.parent) || cnt > 4){
		return "error";
	}else{
		return this.gfn_getDataSetParent(obj.parent,ds_name,cnt);
	}
}

/**
 * @class  excel import on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfn_importAllOnerror = function(obj,  e)
{
	this.setWaitCursor(false);	
	this.alert(e.errormsg);
};