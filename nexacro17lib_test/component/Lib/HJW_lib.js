/**
*  @FileName 	HJW_lib.js 
*/

var pForm = nexacro.Form.prototype;

/************************************************************************************************
* HJW 공통 라이브러리
************************************************************************************************/
/**
 * @class 컴포넌트 활성화 & 비활성화
 * @param {String} 컴포넌트
 * @return 
 * @example
 * this.efn_componentReadonly(this.div_search,"edt_PJTNM,edt_PJTNO,~~~");	// json
 */
pForm.efn_CommonApi = function(){

	this.objExtCommon = {};
	this.objExtURL = "";
	//var objSrv = nexacro.getEnvironment().services["svc_api"].url;
	//trace(nexacro.getEnvironment().services["url_qbic"].url); 
	//trace( objSrv );
	var navigatorFullName = system.navigatorfullname;
	//trace( navigatorFullName );
	if ( navigatorFullName === "nexacro platform 17 Engine (x86)" )
	{
		this.objExtURL = "D:\\jay\\03_Nexacro_Project\\PMS\\API\\ExtCommonAPI\\Output\\Win32\\ExtCommonV17_32_EX.dll";
	}
	else if ( navigatorFullName === "nexacro platform 17 Engine (x64)" )
	{
		this.objExtURL = "D:\\jay\\03_Nexacro_Project\\PMS\\API\\ExtCommonAPI\\Output\\x64\\ExtCommonV17_64.dll";	
		//this.objExtURL = objSrv+"\\x64\\ExtCommonV17_64.dll";
	}
	else if ( navigatorFullName === "nexacro platform 17 Engine (Windows XP)" )
	{
		this.objExtURL = "D:\\jay\\03_Nexacro_Project\\PMS\\API\\ExtCommonAPI\\Output\\WinXP\\ExtCommonV17_XP_EX.dll";
	}
// 	else
// 	{
// 		alert("Not Nexacro Runtime!!! Only Runtime !!!");
// 	}

	//this.objExtURL = "C:\Users\jay8707\Desktop\Nexacro17_ExtCommonAPI\Output\x64"
	//this.objExtURL = "C:\\Users\\jay8707\\Desktop\\Nexacro17_ExtCommonAPI\\Output\\x64\\ExtCommonV17_64.dll"
		
	//trace(this.objExtURL);
	this.objExtCommon = nexacro._addExtensionModule(this.objExtURL);
	
	//trace( ">>>>" +  this.objExtCommon );
}

/**
 * @class Combo에 innerdata 세팅 
 * @param {String} obj, gds id, add_ds, 콤보박스 form id, 필터 값, "전체" 표시여부, "전체" 표시여부	
 * @return 
 * @example
 * this.efn_SetComboData(obj,this.objApp.gds_code,add_ds,this.div_search.form.cmb_Use_YN,"GRP_CODE==0002",true,true);	// combo set
 */
pForm.efn_SetComboData = function(form,gds_ds,add_ds,ComboItem,filter_text,is_All,is_SelectFirst)
{
	// ds 생성
	var ds = new Dataset;
	
	if (!this.gfn_isNull(filter_text))
	{
		filter_text //+= " && IS_USE=='0001'"
	}
	
	// gds filter
	gds_ds.filter(filter_text);
	
	ds.copyData(gds_ds, true);
	
	//검색조건
	if(is_All){
		ds.insertRow(0);
		ds.setColumn(0,"CODE","-999");
		ds.setColumn(0,"CODE_NAME","전체");
		ds.setColumn(0,"USR_ID","-999");
		ds.setColumn(0,"USR_NM","전체");
	}
	
	// form에 ds 동적으로 생성
	form.addChild(add_ds,ds);
	
	// combo에 데이터셋 세팅
	ComboItem.set_innerdataset(add_ds);
	
	// combo index 설정
	if(is_SelectFirst){
		ComboItem.set_index(0);
	}
	
	gds_ds.filter("");
}

/**
 * @class Combo에 innerdata 세팅 
 * @param {String} obj, gds id, add_ds, 콤보박스 form id, 필터 값, "전체" 표시여부, "전체" 표시여부	
 * @return 
 * @example
 * this.efn_SetComboData(obj,this.objApp.gds_code,add_ds,this.div_search.form.cmb_Use_YN,"GRP_CODE==0002",true,true);	// combo set
 */
pForm.efn_SetComboData2 = function(form,gds_ds,add_ds,ComboItem,filter_text,is_All,is_SelectFirst)
{
	// ds 생성
	var ds = new Dataset;
	
	if (!this.gfn_isNull(filter_text))
	{
		filter_text //+= " && IS_USE=='0001'"
	}
	
	// gds filter
	gds_ds.filter(filter_text);
	
	ds.copyData(gds_ds, true);
	
	//검색조건
	if(is_All){
		ds.insertRow(0);
		ds.setColumn(0,"CODE","-999");
		ds.setColumn(0,"CODE_NAME","선택");
		ds.setColumn(0,"USR_ID","-999");
		ds.setColumn(0,"USR_NM","선택");
	}
	
	// form에 ds 동적으로 생성
	form.addChild(add_ds,ds);
	
	// combo에 데이터셋 세팅
	ComboItem.set_innerdataset(add_ds);
	
	// combo index 설정
	if(is_SelectFirst){
		ComboItem.set_index(0);
	}
	
	gds_ds.filter("");
}

/**
 * @class 그리드(콤보)용 데이터셋 세팅 코드세팅
 * @param {String} ds명, gds id, group_code	
 * @return 
 * @example
 * this.efn_SetDatasetData(set_ds, gds_ds, group_code);	// dataset set
 */
pForm.efn_SetDatasetData = function(set_ds,gds_ds,group_code){

	var ds = new Dataset;
	var filter_text = "MAJOR_CD=='"+group_code+"'";
	//gds_ds.filter("MAJOR_CD='"+group_code+"'");
	gds_ds.filter(filter_text);
	set_ds.copyData(gds_ds, true);
	gds_ds.filter("");
}

/**
 * @class 그리드(콤보)용 데이터셋 세팅 코드세팅 (MAJOR, MINOR)
 * @param {String} ds명, gds id, group_code	
 * @return 
 * @example
 * this.efn_SetDatasetData2(set_ds, gds_ds, group_code);	// dataset set
 */
pForm.efn_SetDatasetData2 = function(set_ds,gds_ds,group_code){

	var ds = new Dataset;
	var filter_text = "MAJOR_CODE=='"+group_code+"'";
	//gds_ds.filter("MAJOR_CD='"+group_code+"'");
	gds_ds.filter(filter_text);
	set_ds.copyData(gds_ds, true);
	gds_ds.filter("");
}

/**

 * @class EVALCODE 테이블 데이터셋 
 * @param {String} ds명, gds id, group_code	
 * @return 
 * @example
 * this.efn_SetDatasetData(set_ds, gds_ds, group_code);	// dataset set
 */
pForm.efn_SetDatasetData_Eval = function(set_ds,gds_ds,group_code){

	var ds = new Dataset;
	gds_ds.filter("GROUPCD=='"+group_code+"' && USEFLAG=='1'");
	set_ds.copyData(gds_ds, true);
	gds_ds.filter("");
}
/**
 * @class 회계기수 코드 데이터셋
 * @param {String} ds명, gds id, group_code	
 * @return 
 * @example
 * this.efn_SetDatasetData(set_ds, gds_ds, group_code);	// dataset set
 */
pForm.efn_SetDatasetData_Eval2 = function(set_ds,gds_ds,group_code){

	var ds = new Dataset;
	gds_ds.filter("GROUPCD=='"+group_code+"' && DF03=='1' && USEFLAG=='1'");
	set_ds.copyData(gds_ds, true);
	gds_ds.filter("");
}

/**
 * @class 그리드(콤보)용 데이터셋 세팅 유저세팅
 * @param {String} ds명, gds id, group_code	
 * @return 
 * @example
 * this.efn_SetDatasetData(set_ds, gds_ds, group_code);	// dataset set
 */
pForm.efn_SetGrdUserData = function(set_ds,gds_ds,is_All,is_SelectFirst){
 
	set_ds.copyData(gds_ds, true);

	//검색조건
	if(is_All){
		set_ds.insertRow(0);
		set_ds.setColumn(0,"CODE","-999");
		set_ds.setColumn(0,"CODE_NAME","전체");
	}
}

/**
 * @class 결제 팝업 오픈
 * @param {String} ds명, gds id, group_code	
 * @return 
 * @example
 * this.efn_OpenDocPopup(obj,doc_no,user_id,doc_code,form_id,txt_html);	// dataset set
 */
pForm.efn_OpenDocPopup = function(form,doc_no,user_id,doc_code,form_id,txt_html){
	var txt_encode =  encodeURIComponent(txt_html).replace( /\%20/g, "+")
							 .replace( /\!/g, "%21")
							 .replace(/\'/g, "%27")
							 .replace(/\(/g, "%28")
							 .replace(/\)/g, "%29")
							 .replace(/\~/g, "%7E");
	var nowDate = form.gfn_getDate("time");// "20190729161148";
	var key = CryptoJS.enc.Utf8.parse("1023497555960596"); 
	var iv = CryptoJS.enc.Utf8.parse("1023497555960596"); 
	var encrypted = form.efn_dataEncode(nowDate+"▦"+user_id, key, iv); 
	var sPopupId  = "DOC_popup";
    var sUrl      = "DOC_POP::DP0001_P01.xfdl";
	var oArg      = {UserID : encrypted,
					 Doc_No : doc_no,
	                 Doc_Code : doc_code,
					 form_id : form_id,
					 txt_html : txt_encode};
	var sCallBack = "";
    var oOption   = "";
	form.gfn_openPopup(sPopupId, sUrl, oArg, sCallBack, oOption);	
}

//암호화 
pForm.efn_dataEncode = function(message, key, iv){ 
	var encrypted = CryptoJS.AES.encrypt(message, key, { iv: iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}); 
	return encrypted.toString(); 
} 


/**
 * @class 팝업 리턴값 json 생성
 * @param {String} ds명
 * @return 
 * @example
 * this.efn_jsonRtn(this.ds_list);	// json
 */
pForm.efn_jsonRtn = function(ds){

	//TODO : 공통화 모듈 분석 ?? DataType 적용 getColumnInfo() >>>> ?? 
	var json = "{";
	var rowindex = ds.rowposition;
	
	
	for(var i = 0; i < ds.colcount; i++){
		json += "\""+ds.getColID(i)+"\":"+"\""+ds.getColumn(rowindex,i)+"\"";
		if(i < ds.colcount -1){
			json += ",";
		}
	}
	json+="}";
	
	return json;
}

/**
 * @class 팝업 리턴값 json 생성
 * @param {String} ds명
 * @return 
 * @example
 * this.efn_jsonRtn(this.ds_list);	// json
 */
pForm.efn_jsonRtnForAll = function(ds){

	//TODO : 공통화 모듈 분석 ?? DataType 적용 getColumnInfo() >>>> ?? 
	var allCnt = ds.rowcount;
	var json = "";
	for(var j = 0;j<allCnt;j++){
		json += "{";
		
		for(var i = 0; i < ds.colcount; i++){
			json += "\""+ds.getColID(i)+"\":"+"\""+ds.getColumn(j,i)+"\"";
			if(i < ds.colcount -1){
				json += ",";
			}
		}
		json+="}";
		if (j+1 < allCnt){
			json+="\r\r";
		}
	}
	
	return json;
}

/**
 * @class 컴포넌트 활성화 & 비활성화
 * @param {String} 컴포넌트
 * @return 
 * @example
 * this.efn_componentReadonly(this.div_search,"edt_PJTNM,edt_PJTNO,~~~");	// json
 */
pForm.efn_componentReadonly = function(coms){

	var index = coms.length;
	
	for(var i = 0; i<index;i++){
		if(!this.gfn_isNull(coms[i].readonly)){
			coms[i].set_readonly(true);
		}
	}
}
pForm.efn_componentReadonly2 = function(coms,flag){

	var index = coms.length;
	
	for(var i = 0; i<index;i++){
		if(!this.gfn_isNull(coms[i].readonly)){
			coms[i].set_readonly(flag);
		}
	}
}

/**
 * @class 컴포넌트 visible
 * @param {String} 컴포넌트
 * @return 
 * @example
 * this.efn_componentReadonly(this.div_search,"edt_PJTNM,edt_PJTNO,~~~");	// json
 */
pForm.efn_componentVisible = function(coms,flag){

	var index = coms.length;
	
	for(var i = 0; i<index;i++){
		if(!this.gfn_isNull(coms[i].visible)){
			coms[i].set_visible(flag);
		}
	}
}
//하위
//부서
//트리구조
//하위만 여부 

pForm.gfn_grdCopy_Paste = function (obj, e)
{
	if(e.ctrlkey){
		if(e.keycode == 67){
		
			var strGrdDsNm = obj.binddataset;
			var v_clip = "";
			var strSeperate = "	";
			for (var i= nexacro.toNumber(obj.selectstartrow);i<= nexacro.toNumber(obj.selectendrow);i++) {
				for (var j=nexacro.toNumber(obj.selectstartcol);j<=nexacro.toNumber(obj.selectendcol);j++) {

					if (j < obj.selectendcol) {
						v_clip += obj.getCellValue(i,j) + strSeperate;
					} else {
						v_clip += obj.getCellValue(i,j);
					}
				}
				if (i < obj.selectendrow) {
					v_clip += "\r\n";
				}
			}
			v_clip += "\r\n";
			system.clearClipboard();
			system.setClipboard("CF_TEXT",v_clip);
			
			if(system.navigatorname == "Chrome"){
				copyThis(v_clip);//크롬에서 복사 처리를 위해 index.html에 정의한 함수 호출.
			}
			
			//trace("strGrdDsNm " + strGrdDsNm);
			//trace("v_clip " + v_clip);
			
		} else if(e.keycode == 86) {
		
		//Chrome브라우저 일 경우 popupdiv를 띄워준다.
		if(system.navigatorname == "Chrome"){
			this.PopupDiv00.trackPopup(400,200);
		}else{
					
			var bAddrow = true;
			if (!this.utlf_IsNull(this.gfn_grdCopy_Paste.arguments[2])) {
				bAddrow = this.gfn_grdCopy_Paste.arguments[2];
			}
			//Grid Binddataset
			var strGrdDsNm = obj.binddataset;
			//cell count
			var nGrdCellCnt = obj.getCellCount("body");
			//cell position
			var nGrdCellPos = obj.getCellPos();		
			
			//trace("nGrdCellPos  " + nGrdCellPos);	
			//row position
			var nRowPos = eval("this." + strGrdDsNm).rowposition;
		
			//trace("nRowPos  " + nRowPos);
			
			//arrText2 index
			var k = 0;
			//Dataset rowcount
			var nDsRowCnt = eval("this." + strGrdDsNm).getRowCount();		

			//trace("nDsRowCnt  " + nDsRowCnt);
				
			//var t_clip = system.getClipboard("CF_UNICODETEXT");
			var t_clip = system.getClipboard("CF_TEXT");
			
			var strText = new String(t_clip);
			var arrText = new Array();
			var arrText2 = new Array();
			arrText = strText.split("\r\n");
			
			//trace("t_clip " + t_clip);
			//trace("strText " + strText);
			//trace("arrText " + arrText);
			//trace("arrText2 " + arrText2);
			
			
			if (nDsRowCnt < (arrText.length + nRowPos -1)) {
				if (bAddrow) {
					
				} else {
					return false;
				}			
			}			
			//복사한 Row만큼
			var oDs =  eval("this." + strGrdDsNm);
			for (var i=0;i<arrText.length;i++) {
				
				if (this.utlf_IsNull(arrText[i])) {
					return;
				}
				arrText2 = arrText[i].split("	");

				//trace("arrText2:" + arrText2);
				
				//기존 dataset갯수보다 많은 경우
				if ( nDsRowCnt <= nRowPos) {
					var nAddrow = oDs.addRow();
				}
				
				var nLoopCnt = (nGrdCellPos + arrText2.length);
				if (nLoopCnt > nGrdCellCnt) {
					nLoopCnt = nGrdCellCnt;
				}
				
				//Dataset setcolumn				
				//trace("nGrdCellPos  " + nGrdCellPos);				
				//trace("nLoopCnt  " + nLoopCnt);
				
				k = 0;
				for (var j=nGrdCellPos;j<nLoopCnt;j++) {
					var colid = obj.getCellProperty("body", j, "text").substr(5);
				
					oDs.setColumn(nRowPos, colid, arrText2[k]);
					
					k++;
				}				
				nRowPos++;
				eval("this." + strGrdDsNm).rowposition = nRowPos;
			}
			return true;
		}
		

 		}
	}
}

//Chrome 브라우저용 메소드
pForm.fn_paste = function(obj,str)
{
		var bAddrow = true;

			//Grid Binddataset
			var strGrdDsNm = obj.binddataset;
			//cell count
			var nGrdCellCnt = obj.getCellCount("body");
			//cell position
			var nGrdCellPos = obj.getCellPos();		
			
			//trace("nGrdCellPos  " + nGrdCellPos);	
			//row position
			var nRowPos = eval("this." + strGrdDsNm).rowposition;
		
			//trace("nRowPos  " + nRowPos);
			
			//arrText2 index
			var k = 0;
			//Dataset rowcount
			var nDsRowCnt = eval("this." + strGrdDsNm).getRowCount();		

			//trace("nDsRowCnt  " + nDsRowCnt);
				
			//var t_clip = system.getClipboard("CF_UNICODETEXT");
			//var t_clip = system.getClipboard("CF_TEXT");
			//클립보드 사용이 불가 하기 때문에 textarea에서 넘겨받은 값을 이용.
			var t_clip = str;
			
			var strText = new String(t_clip);
			var arrText = new Array();
			var arrText2 = new Array();
			arrText = strText.split("\n");//넥사크로에서는 줄바꿈을 \n 으로 사용.
			
			//trace("t_clip " + t_clip);
			//trace("strText " + strText);
			//trace("arrText " + arrText);
			//trace("arrText2 " + arrText2);
			
			
			if (nDsRowCnt < (arrText.length + nRowPos -1)) {
				if (bAddrow) {
					
				} else {
					return false;
				}			
			}			
			//복사한 Row만큼
			var oDs =  eval("this." + strGrdDsNm);
			for (var i=0;i<arrText.length;i++) {
				
				if (this.utlf_IsNull(arrText[i])) {
					return;
				}
				arrText2 = arrText[i].split("	");

				//trace("arrText2:" + arrText2);
				
				//기존 dataset갯수보다 많은 경우
				if ( nDsRowCnt <= nRowPos) {
					var nAddrow = oDs.addRow();
				}
				
				var nLoopCnt = (nGrdCellPos + arrText2.length);
				if (nLoopCnt > nGrdCellCnt) {
					nLoopCnt = nGrdCellCnt;
				}
				
				//Dataset setcolumn				
				//trace("nGrdCellPos  " + nGrdCellPos);				
				//trace("nLoopCnt  " + nLoopCnt);
				
				k = 0;
				for (var j=nGrdCellPos;j<nLoopCnt;j++) {
					var colid = obj.getCellProperty("body", j, "text").substr(5);
				
					oDs.setColumn(nRowPos, colid, arrText2[k]);
					
					k++;
				}				
				nRowPos++;
				eval("this." + strGrdDsNm).rowposition = nRowPos;
			}
			return true;
		
}

/**

* Null에 해당하는 값 체크.
* @param : sValue - Null 확인 값
* @return : true/false
* @example : utlf_IsNull(sValue);
*/
pForm.utlf_IsNull = function (sValue)
{
	if( new String(sValue).valueOf() == "undefined") 
		return true;
	if( sValue == null )
		return true;
	if( ("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ) )
		return true;
	if( sValue.length == 0 )
		return true;
	return false;
}