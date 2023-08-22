﻿/**
*  @FileName 	Transaction.xfdl
*/

var pForm = nexacro.Form.prototype;

/******************************************************************************************************
 * @class 서비스 호출 공통함수 <br>
 * Dataset의 값을 갱신하기 위한 서비스를 호출하고, 트랜젝션이 완료되면 콜백함수을 수행하는 함수
 * @param {String} strSvcId - 서비스 ID
 * @param {String} strSvcUrl - 서비스 호출 URL 
 * @param {String} [inData]	- input Dataset list("입력ID=DataSet ID" 형식으로 설정하며 빈칸으로 구분)
 * @param {String} [outData] - output Dataset list("DataSet ID=출력ID" 형식으로 설정하며 빈칸으로 구분)
 * @param {String} [strArg]	- 서비스 호출시 Agrgument
 * @param {String} [callBackFnc] - 콜백 함수명
 * @param {Boolean} [isAsync] - 비동기통신 여부 
 * @return N/A
 * @example
 * var strSvcUrl = "transactionSaveTest.do";
 * var inData    = "dsList=dsList:U";
 * var outData   = "dsList=dsList";
 * var strArg    = "";
 * this.gfnTransaction("save", strSvcUrl, inData, outData, strArg, "fnCallback", true);
*****************************************************************************************************/ 
pForm.gfn_transaction = function(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync)
{	
	// callback 함수 기본값 설정
	if (this.gfn_isNull(callBackFnc)) callBackFnc = "fn_callback";
	
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();

	// Async
	if ((isAsync != true) && (isAsync != false)) isAsync = true;	
	
	// 1. callback에서 처리할 서비스 정보 저장
	var objSvcID = { 
			svcId     : strSvcId,
			svcUrl    : strSvcUrl,
			callback  : callBackFnc,
			isAsync   : isAsync,
			startDate : sStartDate,
			startTime : nStartTime };

	// 2. strServiceUrl
//	var strServiceUrl = "SvcUrl::" + strSvcUrl;
	var strServiceUrl = strSvcUrl;
	
	// 3. strArg
	var strArguments = "";
	if (this.gfn_isNull(strArg)) {
		strArguments = "";
	}
	else { 
		strArguments = strArg;
	}

	// 개발시에는 xml, 개발서버/운영서버는 SSV로 통신
	var nDataType;	
	if (nexacro.getEnvironmentVariable("ev_RunMode") == "2") {
		nDataType = 2;
	}
	else {
		nDataType = 0;
	}

     //trace("in_var1="+nexacro.wrapQuote(this.titletext) + " in_var2="+this.name); 
	this.transaction( JSON.stringify(objSvcID)  //1.svcID
					, strServiceUrl             //2.strServiceUrl
					, inData                    //3.inDataSet
					, outData                   //4.outDataSet
					, strArguments              //5.arguments
					, "gfn_callback"				//6.strCallbackFunc
					, isAsync                   //7.bAsync
					, nDataType                 //8.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
					, false);                   //9.bCompress ( default : false ) 
};

/**
 * @class 공통 Callback 함수 <br>
 * 이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다.
 * @param {String} svcID - 서비스 ID
 * @param {Number} errorCode - 에러코드(정상 0, 에러 음수값)
 * @param {String} [errorMsg] - 에러메시지
 * @return N/A
 */
pForm.gfn_callback = function(svcID, errorCode, errorMsg)
{
	var objSvcID = JSON.parse(svcID);
	// 에러 공통 처리
	if(errorCode != 0)
	{
		switch(errorCode)
		{
			case -1 :				
				var arrError = (""+errorMsg).split("Query is");
				// 서버 오류입니다.\n관리자에게 문의하세요.
				this.gfn_alert("msg.server.error");
				break;
				
			case -2463215:
				//@todo : 임의 에러코드  처리
				//return false;
				break;
		}
	}

	// 서비스 실행결과 출력
	var sStartDate = objSvcID.startDate;
	var nStartTime = objSvcID.startTime;
	
	var objDate = new Date();
	var sEndDate = objDate.getYear()
					+"-"+String(objDate.getMonth()).padLeft(2, '0')
					+"-"+String(objDate.getDate()).padLeft(2, '0')
					+" "+String(objDate.getHours()).padLeft(2, '0')
					+":"+String(objDate.getMinutes()).padLeft(2, '0')
					+":"+String(objDate.getSeconds()).padLeft(2, '0')
					+" "+objDate.getMilliseconds();
	var nElapseTime = (objDate.getTime() - nStartTime)/1000;
	
	var sMsg = "";
	if (errorCode == 0)
	{
		sMsg = "gfn_callback : svcID>>"+objSvcID.svcId+ ",  svcUrl>>"+objSvcID.svcUrl+ ",  errorCode>>"+errorCode + ", errorMsg>>"+errorMsg + ", isAsync>>" + objSvcID.isAsync + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
		//trace(sMsg);
	}
	else {
		sMsg = "gfn_callback : svcID>>"+objSvcID.svcId+ ",  svcUrl>>"+objSvcID.svcUrl+ ",  errorCode>>"+errorCode + ", isAsync>>" + objSvcID.isAsync + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
		sMsg += "\n==================== errorMsg =======================\n"+errorMsg+"\n==================================================";
		//trace(sMsg);
	}

	// form에 callback 함수가 있을때
	if (this[objSvcID.callback]) {
        this.lookupFunc(objSvcID.callback).call(objSvcID.svcId, errorCode, errorMsg);
    }
};