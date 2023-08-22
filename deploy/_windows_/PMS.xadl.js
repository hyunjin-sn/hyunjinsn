(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PA_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_FULL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"INT\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">1001</Col><Col id=\"PA_MENU_ID\">10</Col><Col id=\"MENU_NAME\">PMS</Col><Col id=\"USED_YN\">1</Col><Col id=\"LEVEL\">0</Col><Col id=\"REG_USER\">jay8707</Col><Col id=\"REG_DATE\">20190411</Col><Col id=\"REG_IP\">192.168.5.152</Col></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"MENU_ID\">1002</Col><Col id=\"PA_MENU_ID\">10</Col><Col id=\"MENU_NAME\">프로젝트</Col><Col id=\"USED_YN\">1</Col><Col id=\"REG_USER\">jay8707</Col><Col id=\"REG_DATE\">20190411</Col><Col id=\"REG_IP\">192.168.5.152</Col><Col id=\"PRGM_FULL_PATH\"/><Col id=\"PRGM_ID\">sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Col></Row><Row><Col id=\"LEVEL\">2</Col><Col id=\"MENU_ID\">1003</Col><Col id=\"PA_MENU_ID\">10</Col><Col id=\"MENU_NAME\">프로젝트 조회</Col><Col id=\"PRGM_ID\">PM0001</Col><Col id=\"PRGM_FULL_PATH\">PJT_M::PM0001.xfdl</Col><Col id=\"PRGM_FILE_NAME\">PM0001.xfdl</Col><Col id=\"MENU_ORDR\">1</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_PATH\">PJT_M</Col><Col id=\"REG_USER\">jay8707</Col><Col id=\"REG_DATE\">20190411</Col><Col id=\"REG_IP\">192.168.5.152</Col></Row><Row><Col id=\"MENU_ID\">1004</Col><Col id=\"PA_MENU_ID\">10</Col><Col id=\"MENU_NAME\">프로젝트조회v2</Col><Col id=\"PRGM_ID\">PM0002</Col><Col id=\"PRGM_FULL_PATH\">PJT_M::PM0002.xfdl</Col><Col id=\"PRGM_PATH\">PJT_M</Col><Col id=\"PRGM_FILE_NAME\">PM0002.xfdl</Col><Col id=\"MENU_ORDR\">1</Col><Col id=\"USED_YN\">1</Col><Col id=\"LEVEL\">2</Col><Col id=\"REG_DATE\">20190411</Col><Col id=\"REG_USER\">jay8707</Col><Col id=\"REG_IP\">192.168.5.152</Col><Col id=\"MENU_AUTH\">111110</Col></Row><Row><Col id=\"MENU_ID\">2001</Col><Col id=\"PA_MENU_ID\">20</Col><Col id=\"MENU_NAME\">관리자</Col><Col id=\"USED_YN\">1</Col><Col id=\"LEVEL\">0</Col><Col id=\"REG_USER\">jay8707</Col><Col id=\"REG_DATE\">20190411</Col><Col id=\"REG_IP\">192.168.5.152</Col></Row><Row><Col id=\"MENU_ID\">2002</Col><Col id=\"PA_MENU_ID\">20</Col><Col id=\"MENU_NAME\">메뉴</Col><Col id=\"USED_YN\">1</Col><Col id=\"LEVEL\">1</Col><Col id=\"REG_USER\">jay8707</Col><Col id=\"REG_DATE\">20190411</Col><Col id=\"REG_IP\">192.168.5.152</Col></Row><Row><Col id=\"MENU_ID\">2003</Col><Col id=\"PA_MENU_ID\">20</Col><Col id=\"MENU_NAME\">메뉴등록</Col><Col id=\"PRGM_ID\">MM0001</Col><Col id=\"PRGM_FULL_PATH\">Master_M::MM0001.xfdl</Col><Col id=\"PRGM_FILE_NAME\">MM0001.xfdl</Col><Col id=\"MENU_ORDR\">1</Col><Col id=\"USED_YN\">1</Col><Col id=\"LEVEL\">2</Col><Col id=\"PRGM_PATH\">Master_M</Col><Col id=\"REG_USER\">jay8707</Col><Col id=\"REG_DATE\">20190411</Col><Col id=\"REG_IP\">192.168.5.152</Col><Col id=\"MENU_AUTH\">111111</Col></Row><Row><Col id=\"MENU_ID\">2004</Col><Col id=\"PA_MENU_ID\">20</Col><Col id=\"MENU_NAME\">메뉴권한등록</Col><Col id=\"PRGM_ID\">MM0002</Col><Col id=\"PRGM_FULL_PATH\">Master_M::MM0002.xfdl</Col><Col id=\"PRGM_PATH\">Master_M</Col><Col id=\"PRGM_FILE_NAME\">MM0002.xfdl</Col><Col id=\"MENU_ORDR\">2</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"REG_DATE\">20190411</Col><Col id=\"REG_USER\">jay8707</Col><Col id=\"REG_IP\">192.168.5.152</Col><Col id=\"MENU_AUTH\">111110</Col></Row><Row><Col id=\"MENU_ID\">3001</Col><Col id=\"MENU_NAME\">템플릿</Col><Col id=\"REG_DATE\"/><Col id=\"REG_USER\"/><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">0</Col><Col id=\"USED_YN\">1</Col></Row><Row><Col id=\"MENU_ID\">3002</Col><Col id=\"MENU_NAME\">컴포넌트</Col><Col id=\"REG_DATE\"/><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">1</Col><Col id=\"USED_YN\">1</Col></Row><Row><Col id=\"MENU_ID\">3003</Col><Col id=\"MENU_NAME\">컴포넌트 가이드</Col><Col id=\"REG_DATE\"/><Col id=\"REG_USER\">111111</Col><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Comp01.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3004</Col><Col id=\"MENU_NAME\">버튼 가이드</Col><Col id=\"REG_DATE\"/><Col id=\"REG_USER\">100100</Col><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Comp02.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3005</Col><Col id=\"MENU_NAME\">그리드 가이드</Col><Col id=\"REG_DATE\"/><Col id=\"REG_USER\">010101</Col><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Comp03.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3006</Col><Col id=\"MENU_NAME\">조회영역</Col><Col id=\"REG_DATE\"/><Col id=\"REG_USER\">001001</Col><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Comp04.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3007</Col><Col id=\"MENU_NAME\">상세영역</Col><Col id=\"REG_DATE\"/><Col id=\"REG_USER\">111111</Col><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Comp05.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3008</Col><Col id=\"MENU_NAME\">화면</Col><Col id=\"REG_DATE\"/><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">1</Col><Col id=\"USED_YN\">1</Col></Row><Row><Col id=\"MENU_ID\">3009</Col><Col id=\"MENU_NAME\">템플릿1</Col><Col id=\"REG_DATE\"/><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Form01.xfdl</Col><Col id=\"DESCRIPTION\">sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Col></Row><Row><Col id=\"MENU_ID\">3010</Col><Col id=\"MENU_NAME\">템플릿2</Col><Col id=\"REG_DATE\"/><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Form02.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3011</Col><Col id=\"MENU_NAME\">템플릿3</Col><Col id=\"REG_DATE\"/><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Form03.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3012</Col><Col id=\"MENU_NAME\">템플릿4</Col><Col id=\"REG_DATE\"/><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Form04.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3013</Col><Col id=\"MENU_NAME\">템플릿5</Col><Col id=\"REG_DATE\"/><Col id=\"REG_USER\"/><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Form05.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3014</Col><Col id=\"MENU_NAME\">템플릿6</Col><Col id=\"REG_DATE\"/><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Form06.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3015</Col><Col id=\"MENU_NAME\">템플릿7</Col><Col id=\"REG_DATE\"/><Col id=\"PA_MENU_ID\">30</Col><Col id=\"LEVEL\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"PRGM_FULL_PATH\">Guide::Guide_Form07.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TEXT_EN\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"2\"/></ColumnInfo><Rows><Row><Col id=\"MSG_ID\">msg.server.error</Col><Col id=\"MSG_TEXT\">서버 오류입니다.\\n관리자에게 문의하세요.</Col><Col id=\"MSG_TEXT_EN\">Server error. Please contact your administrator.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.server.error.msg</Col><Col id=\"MSG_TEXT\">서버에서 다음과 같은 에러메시지를 받았습니다.\\n{0}</Col><Col id=\"MSG_TEXT_EN\">The server received the following error message.s\\n{0}</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.session.timeout</Col><Col id=\"MSG_TEXT\">세션이 종료되었습니다. 다시 로그인해주세요.</Col><Col id=\"MSG_TEXT_EN\">Your session has expired, please login again.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.login.url.error</Col><Col id=\"MSG_TEXT\">정상적인 경로로 접속하시기 바랍니다.</Col><Col id=\"MSG_TEXT_EN\">invalid access! please, login first at www.tobesoft.com</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.login.error</Col><Col id=\"MSG_TEXT\">해당하는 사용자 정보가 없습니다.</Col><Col id=\"MSG_TEXT_EN\">No user found.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.call.nofile</Col><Col id=\"MSG_TEXT\">해당하는 메뉴에 Program File이 등록되지 않았습니다.</Col><Col id=\"MSG_TEXT_EN\">the requested menu does not exist!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.nomenu</Col><Col id=\"MSG_TEXT\">해당 Menu가 존재하지 않습니다.</Col><Col id=\"MSG_TEXT_EN\">The specified menu doesn't exist.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">confirm.logout</Col><Col id=\"MSG_TEXT\">로그아웃 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Are you sure you want to log out?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.movepage</Col><Col id=\"MSG_TEXT\">변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?</Col><Col id=\"MSG_TEXT_EN\">There are unsaved data. Would you like to leave now?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.search</Col><Col id=\"MSG_TEXT\">검색을 진행하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Any unsaved data will be discarded. \\nWould you like to continue?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.moveropos</Col><Col id=\"MSG_TEXT\">해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">If you move the selected row, your changes will be discarded. \\nWould you like to continue?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.delete</Col><Col id=\"MSG_TEXT\">선택된 자료를 삭제 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Are you sure you want to delete?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.deletesave</Col><Col id=\"MSG_TEXT\">선택된 자료를 삭제 후 저장하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Are you sure you want to delete and save?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">msg.noselect</Col><Col id=\"MSG_TEXT\">{0} 을(를) 선택해 주십시요.</Col><Col id=\"MSG_TEXT_EN\">Please, select {0}</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.search.nodata</Col><Col id=\"MSG_TEXT\">지정된 조건에 해당하는 항목을 찾을 수 없습니다.</Col><Col id=\"MSG_TEXT_EN\">No data found.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.save.nodata</Col><Col id=\"MSG_TEXT\">저장할 데이터가 없습니다.</Col><Col id=\"MSG_TEXT_EN\">No data to save.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.save.nochange</Col><Col id=\"MSG_TEXT\">변경된 내역이 없습니다.</Col><Col id=\"MSG_TEXT_EN\">No changes found.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.save</Col><Col id=\"MSG_TEXT\">변경된 내역을 저장 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Would you like to save your changes?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">msg.search.success</Col><Col id=\"MSG_TEXT\">조회 되었습니다.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.save.success</Col><Col id=\"MSG_TEXT\">저장 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">Successfully saved!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.update.success</Col><Col id=\"MSG_TEXT\">수정 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">Successfully updated!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.delete.success</Col><Col id=\"MSG_TEXT\">삭제 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">Successfully deleted!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.action.success</Col><Col id=\"MSG_TEXT\">처리 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">Successfully processed!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.action.fail</Col><Col id=\"MSG_TEXT\">프로세스가 실패하였습니다.</Col><Col id=\"MSG_TEXT_EN\">Failed process!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.updateafter</Col><Col id=\"MSG_TEXT\">변경된 내역을 저장 후 작업하세요.</Col><Col id=\"MSG_TEXT_EN\">Please, save your changes first!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.delete.child</Col><Col id=\"MSG_TEXT\">하위 자료가 있어 삭제할 수 없습니다.</Col><Col id=\"MSG_TEXT_EN\">the requested deletion could not be performed because dependent data found!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.grid.noselect</Col><Col id=\"MSG_TEXT\">선택된 항목이 없습니다.</Col><Col id=\"MSG_TEXT_EN\">No item has been selected!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.before.delete</Col><Col id=\"MSG_TEXT\">정말로 삭제 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Are you sure you want to delete?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator</Col><Col id=\"MSG_TEXT\">{0}</Col><Col id=\"MSG_TEXT_EN\">{0}</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.required</Col><Col id=\"MSG_TEXT\">{0} 은(는) 필수 입력 항목입니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is a required field.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.length</Col><Col id=\"MSG_TEXT\">{0} 의 입력값은 {1} 자리이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} must be equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.rangelength</Col><Col id=\"MSG_TEXT\">{0} 은(는) {1} 와(과) {2} 사이의 자리이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} is between {1} and {2}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.maxlength</Col><Col id=\"MSG_TEXT\">{0} 의 입력값의 길이는 {1} 이하이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} must be less than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.minlength</Col><Col id=\"MSG_TEXT\">{0} 의 입력값의 길이는 {1} 이상이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} must be greater than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.maxlengthB</Col><Col id=\"MSG_TEXT\">{0} 의 입력값의 길이는 {1} 이하이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} must be less than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.minlengthB</Col><Col id=\"MSG_TEXT\">{0} 의 입력값의 길이는 {1} 이상이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} must be greater than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.digits</Col><Col id=\"MSG_TEXT\">{0} 은(는) 숫자만 입력 가능합니다.</Col><Col id=\"MSG_TEXT_EN\">{0} must be a numeric value.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.min</Col><Col id=\"MSG_TEXT\">{0} 은(는) {1} 이상의 숫자만 입력 가능합니다.</Col><Col id=\"MSG_TEXT_EN\">{0} must be a numeric value greater than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.max</Col><Col id=\"MSG_TEXT\">{0} 은(는) {1} 이하의 숫자만 입력 가능합니다.</Col><Col id=\"MSG_TEXT_EN\">{0} must be a numeric value less than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.date</Col><Col id=\"MSG_TEXT\">{0} 은(는) 유효하지 않은 날짜 형식입니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is in invalid date format.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.dateym</Col><Col id=\"MSG_TEXT\">{0} 은(는) 유효하지 않은 년월 형식입니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is in invalid year/month format.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.fromto</Col><Col id=\"MSG_TEXT\">{0} 의 날짜가 {1} 의 날짜보다 작습니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is less than {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.comparebig</Col><Col id=\"MSG_TEXT\">{0} 이(가) {1} 보다 작습니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is less than {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.comparesmall</Col><Col id=\"MSG_TEXT\">{0} 이(가) {1} 보다 큽니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is greater than {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.equalto</Col><Col id=\"MSG_TEXT\">{0} 이(가) {1} 와(과) 일치하지 않습니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is not equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.range</Col><Col id=\"MSG_TEXT\">{0} 은(는) {1} 와(과) {2} 사이의 값입니다.</Col><Col id=\"MSG_TEXT_EN\">The value of {0} is between {1} and {2}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.declimit</Col><Col id=\"MSG_TEXT\">{0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The fractional part of {0} must consiste of {1} digits.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.code</Col><Col id=\"MSG_TEXT\">{0} 은(는) {1} 중 하나의 값이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">{0} must be the value of {1}</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.ssn</Col><Col id=\"MSG_TEXT\">{0} 은(는) 올바른 주민번호가 아닙니다.</Col><Col id=\"MSG_TEXT_EN\">The entered Social Security Number is invalid.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.email</Col><Col id=\"MSG_TEXT\">e-mail이 잘못된 형태로 입력 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">The entered email address is invalid.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.url</Col><Col id=\"MSG_TEXT\">웹사이트 주소가 잘못 입력 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">The entered website address is invalid.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.phone</Col><Col id=\"MSG_TEXT\">전화번호가 잘못된 형태로 입력 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">The entered phone number is invalid.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.zipcode</Col><Col id=\"MSG_TEXT\">우편번호가 잘못된 형태로 입력 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">The entered ZIP code is invalid.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.multicombo.maxcnt</Col><Col id=\"MSG_TEXT\">{0}개 이상 선택 할 수 없습니다.</Col><Col id=\"MSG_TEXT_EN\">You can't select more than {0}</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.maxdate</Col><Col id=\"MSG_TEXT\">날짜의 입력 가능 범위를 벗어났습니다.</Col><Col id=\"MSG_TEXT_EN\">Invalid date.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.date.great</Col><Col id=\"MSG_TEXT\">종료일이 시작일보다 빠릅니다.</Col><Col id=\"MSG_TEXT_EN\">Invalid date range.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.filesize</Col><Col id=\"MSG_TEXT\">첨부 파일의 용량은 최고 5MB까지 입니다.</Col><Col id=\"MSG_TEXT_EN\">Maximum allowed attachment size is 5 MB.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.nofilepath</Col><Col id=\"MSG_TEXT\">경로가 지정되지 않은 첨부파일은 업/다운로드 할 수 없습니다.</Col><Col id=\"MSG_TEXT_EN\">A valid file path must be provided.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.exist.code</Col><Col id=\"MSG_TEXT\">입력하는 Code ({0})값이 이미 등록되어 있습니다.</Col><Col id=\"MSG_TEXT_EN\">Code already exsits!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.invalid.filename</Col><Col id=\"MSG_TEXT\">파일 이름이 정의되지 않았습니다.</Col><Col id=\"MSG_TEXT_EN\">Please, specify a filename.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.notice.itemcount</Col><Col id=\"MSG_TEXT\">첨부 파일은 {0}개 이상 등록 할 수 없습니다.</Col><Col id=\"MSG_TEXT_EN\">Attachments can not be registered in more than {0}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.uploadfail</Col><Col id=\"MSG_TEXT\">{0}로(으로) 파일업로드 실패 입니다.</Col><Col id=\"MSG_TEXT_EN\">the file upload is failed because {0}.</Col><Col id=\"MSG_TYPE\">A</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_myMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PA_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_FULL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_openForm", this);
            obj._setContents("<ColumnInfo><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_gridPersonal", this);
            obj._setContents("<ColumnInfo><Column id=\"sFormatId\" type=\"STRING\" size=\"256\"/><Column id=\"sFormat\" type=\"STRING\" size=\"2147483647\"/><Column id=\"sOrgFormat\" type=\"STRING\" size=\"2147483647\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_word", this);
            obj._setContents("<ColumnInfo><Column id=\"WORD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KR\" type=\"STRING\" size=\"256\"/><Column id=\"EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"KR\">스테틱</Col><Col id=\"EN\">static</Col><Col id=\"WORD_ID\">comp.static</Col></Row><Row><Col id=\"KR\">체크</Col><Col id=\"EN\">check</Col><Col id=\"WORD_ID\">comp.check</Col></Row><Row><Col id=\"WORD_ID\">comp.button</Col><Col id=\"KR\">버튼</Col><Col id=\"EN\">button</Col></Row><Row><Col id=\"KR\">박스</Col><Col id=\"EN\">box</Col><Col id=\"WORD_ID\">comp.box</Col></Row><Row><Col id=\"KR\">콤보</Col><Col id=\"EN\">combo</Col><Col id=\"WORD_ID\">comp.combo</Col></Row><Row><Col id=\"KR\">달력</Col><Col id=\"EN\">calendar</Col><Col id=\"WORD_ID\">comp.calendar</Col></Row><Row><Col id=\"KR\">웹브라우저</Col><Col id=\"EN\">web browser</Col><Col id=\"WORD_ID\">comp.webbrowser</Col></Row><Row><Col id=\"KR\">이미지</Col><Col id=\"EN\">image</Col><Col id=\"WORD_ID\">comp.image</Col></Row><Row><Col id=\"KR\">팝업</Col><Col id=\"EN\">popup</Col><Col id=\"WORD_ID\">comp.popup</Col></Row><Row><Col id=\"KR\">라디오</Col><Col id=\"EN\">radio</Col><Col id=\"WORD_ID\">comp.radio</Col></Row><Row><Col id=\"WORD_ID\">comp.number</Col><Col id=\"KR\">숫자</Col><Col id=\"EN\">number</Col></Row><Row><Col id=\"WORD_ID\">comp.text</Col><Col id=\"KR\">텍스트</Col><Col id=\"EN\">text</Col></Row><Row><Col id=\"WORD_ID\">comp.test</Col><Col id=\"KR\">테스트</Col><Col id=\"EN\">test</Col></Row><Row><Col id=\"WORD_ID\">comp.textmode</Col><Col id=\"KR\">텍스트모드</Col><Col id=\"EN\">text mode</Col></Row><Row><Col id=\"WORD_ID\">frame.menu</Col><Col id=\"EN\">menu</Col><Col id=\"KR\">메뉴</Col></Row><Row><Col id=\"KR\">즐겨찾기</Col><Col id=\"EN\">Favorites</Col><Col id=\"WORD_ID\">frame.favorites</Col></Row><Row><Col id=\"WORD_ID\">frame.searchMenu</Col><Col id=\"KR\">메뉴검색</Col><Col id=\"EN\">Search</Col></Row><Row><Col id=\"WORD_ID\">frame.searchMenu.button</Col><Col id=\"KR\">검색</Col><Col id=\"EN\">sch..</Col></Row><Row><Col id=\"WORD_ID\">frame.logOut</Col><Col id=\"KR\">로그아웃</Col><Col id=\"EN\">Log out</Col></Row><Row><Col id=\"WORD_ID\">cmm.no</Col><Col id=\"KR\">순번</Col><Col id=\"EN\">NO</Col></Row><Row><Col id=\"WORD_ID\">cmm.status</Col><Col id=\"KR\">상태</Col><Col id=\"EN\">Status</Col></Row><Row><Col id=\"WORD_ID\">cmm.checkbox</Col><Col id=\"KR\">체크박스</Col><Col id=\"EN\">Checkbox</Col></Row><Row><Col id=\"WORD_ID\">popup.notice</Col><Col id=\"KR\">알림</Col><Col id=\"EN\">notice</Col></Row><Row><Col id=\"WORD_ID\">popup.confirm</Col><Col id=\"KR\">확인</Col><Col id=\"EN\">confirm</Col></Row><Row><Col id=\"WORD_ID\">popup.ok</Col><Col id=\"KR\">확인</Col><Col id=\"EN\">OK</Col></Row><Row><Col id=\"WORD_ID\">popup.close</Col><Col id=\"KR\">닫기</Col><Col id=\"EN\">Close</Col></Row><Row><Col id=\"WORD_ID\">popup.cancel</Col><Col id=\"KR\">취소</Col><Col id=\"EN\">Cancel</Col></Row><Row><Col id=\"WORD_ID\">popup.periodselect</Col><Col id=\"KR\">기간 선택</Col><Col id=\"EN\">Select the time period</Col></Row><Row><Col id=\"WORD_ID\">popup.monthselect</Col><Col id=\"KR\">월 선택</Col><Col id=\"EN\">Select the month</Col></Row><Row><Col id=\"WORD_ID\">popup.dataselect</Col><Col id=\"KR\">데이터 선택</Col><Col id=\"EN\">Select the data</Col></Row><Row><Col id=\"WORD_ID\">popup.columnselect</Col><Col id=\"KR\">컬럼 선택</Col><Col id=\"EN\">Select the column</Col></Row><Row><Col id=\"WORD_ID\">popup.modal</Col><Col id=\"KR\">모달팝업</Col><Col id=\"EN\">modal popup</Col></Row><Row><Col id=\"WORD_ID\">popup.columnname</Col><Col id=\"KR\">컬럼명</Col><Col id=\"EN\">column name</Col></Row><Row><Col id=\"WORD_ID\">popup.filtercriteria</Col><Col id=\"KR\">필터 기준</Col><Col id=\"EN\">filter criteria</Col></Row><Row><Col id=\"WORD_ID\">popup.findcondition</Col><Col id=\"KR\">찾을 조건</Col><Col id=\"EN\">find conditions</Col></Row><Row><Col id=\"WORD_ID\">popup.datafiltersetting</Col><Col id=\"KR\">데이터 필터 설정</Col><Col id=\"EN\">data filter setting</Col></Row><Row><Col id=\"WORD_ID\">popup.apply</Col><Col id=\"KR\">적용</Col><Col id=\"EN\">Apply</Col></Row><Row><Col id=\"WORD_ID\">popup.datafindreplace</Col><Col id=\"KR\">데이터 찾기/바꾸기</Col><Col id=\"EN\">data find/replace</Col></Row><Row><Col id=\"WORD_ID\">popup.targetcolumn</Col><Col id=\"KR\">대상 컬럼</Col><Col id=\"EN\">target column</Col></Row><Row><Col id=\"WORD_ID\">popup.findstring</Col><Col id=\"KR\">찾을 문자열</Col><Col id=\"EN\">find string</Col></Row><Row><Col id=\"WORD_ID\">popup.replacestring</Col><Col id=\"KR\">바꿀 문자열</Col><Col id=\"EN\">replace string</Col></Row><Row><Col id=\"WORD_ID\">popup.finddirection</Col><Col id=\"KR\">찾을 방향</Col><Col id=\"EN\">find direction</Col></Row><Row><Col id=\"WORD_ID\">popup.findposition</Col><Col id=\"KR\">찾을 위치</Col><Col id=\"EN\">find position</Col></Row><Row><Col id=\"WORD_ID\">popup.find</Col><Col id=\"KR\">찾기</Col><Col id=\"EN\">Find</Col></Row><Row><Col id=\"WORD_ID\">popup.replace</Col><Col id=\"KR\">바꾸기</Col><Col id=\"EN\">Replace</Col></Row><Row><Col id=\"WORD_ID\">popup.allchange</Col><Col id=\"KR\">모두바꾸기</Col><Col id=\"EN\">All Replace</Col></Row><Row><Col id=\"WORD_ID\">popup.casesensitive</Col><Col id=\"KR\">대/소문자 구분</Col><Col id=\"EN\">Case sensitive</Col></Row><Row><Col id=\"WORD_ID\">popup.colshwohide</Col><Col id=\"KR\">컬럼 보이기/숨기기</Col><Col id=\"EN\">column show/hide</Col></Row><Row><Col id=\"KR\">조회</Col><Col id=\"EN\">search</Col><Col id=\"WORD_ID\">search</Col></Row><Row><Col id=\"KR\">입력</Col><Col id=\"EN\">insert</Col><Col id=\"WORD_ID\">insert</Col></Row><Row><Col id=\"KR\">삭제</Col><Col id=\"EN\">delete</Col><Col id=\"WORD_ID\">delete</Col></Row><Row><Col id=\"KR\">수정</Col><Col id=\"EN\">modify</Col><Col id=\"WORD_ID\">modify</Col></Row><Row><Col id=\"WORD_ID\">save</Col><Col id=\"KR\">저장</Col><Col id=\"EN\">save</Col></Row><Row><Col id=\"WORD_ID\">print</Col><Col id=\"EN\">print</Col><Col id=\"KR\">출력</Col></Row><Row><Col id=\"WORD_ID\">excel</Col><Col id=\"KR\">엑셀</Col><Col id=\"EN\">excel</Col></Row><Row><Col id=\"KR\">사원</Col><Col id=\"EN\">employee</Col><Col id=\"WORD_ID\">employee</Col></Row><Row><Col id=\"KR\">부서</Col><Col id=\"EN\">department</Col><Col id=\"WORD_ID\">department</Col></Row><Row><Col id=\"KR\">회사</Col><Col id=\"EN\">company</Col><Col id=\"WORD_ID\">company</Col></Row><Row><Col id=\"WORD_ID\">user</Col><Col id=\"KR\">사용자</Col><Col id=\"EN\">user</Col></Row><Row><Col id=\"KR\">주민등록번호</Col><Col id=\"EN\">Social Security Number</Col><Col id=\"WORD_ID\">user.jumin</Col></Row><Row><Col id=\"WORD_ID\">user.id</Col><Col id=\"KR\">아이디</Col><Col id=\"EN\">ID</Col></Row><Row><Col id=\"KR\">명칭</Col><Col id=\"WORD_ID\">designation</Col><Col id=\"EN\">designation</Col></Row><Row><Col id=\"WORD_ID\">useflg</Col><Col id=\"KR\">사용 여부</Col><Col id=\"EN\">use flg</Col></Row><Row><Col id=\"WORD_ID\">reguser</Col><Col id=\"KR\">등록자</Col><Col id=\"EN\">register user</Col></Row><Row><Col id=\"WORD_ID\">description</Col><Col id=\"KR\">설명</Col><Col id=\"EN\">description</Col></Row><Row><Col id=\"KR\">시작일자</Col><Col id=\"EN\">Start date</Col><Col id=\"WORD_ID\">date.start</Col></Row><Row><Col id=\"KR\">종료일</Col><Col id=\"EN\">End date</Col><Col id=\"WORD_ID\">date.end</Col></Row><Row><Col id=\"WORD_ID\">value.max</Col><Col id=\"KR\">최대값</Col><Col id=\"EN\">Maximum value</Col></Row><Row><Col id=\"KR\">금리</Col><Col id=\"EN\">Interest rate</Col><Col id=\"WORD_ID\">value.interest</Col></Row><Row><Col id=\"EN\">1st value</Col><Col id=\"KR\">1번째값</Col><Col id=\"WORD_ID\">value.1st</Col></Row><Row><Col id=\"EN\">2nd value</Col><Col id=\"KR\">2번째값</Col><Col id=\"WORD_ID\">value.2nd</Col></Row><Row><Col id=\"KR\">등록자</Col><Col id=\"EN\">register</Col><Col id=\"WORD_ID\">register</Col></Row><Row><Col id=\"KR\">정보</Col><Col id=\"EN\">info</Col><Col id=\"WORD_ID\">info</Col></Row><Row><Col id=\"KR\">용어</Col><Col id=\"EN\">word</Col><Col id=\"WORD_ID\">word</Col></Row><Row><Col id=\"KR\">사전</Col><Col id=\"EN\">dictionary</Col><Col id=\"WORD_ID\">dictionary</Col></Row><Row><Col id=\"KR\">국가</Col><Col id=\"EN\">nation</Col><Col id=\"WORD_ID\">nation</Col></Row><Row><Col id=\"KR\">언어</Col><Col id=\"EN\">language</Col><Col id=\"WORD_ID\">language</Col></Row><Row><Col id=\"KR\">선택</Col><Col id=\"EN\">select</Col><Col id=\"WORD_ID\">select</Col></Row><Row><Col id=\"KR\">초기화</Col><Col id=\"EN\">initialize</Col><Col id=\"WORD_ID\">initialize</Col></Row><Row><Col id=\"WORD_ID\">tab1</Col><Col id=\"KR\">1번째탭</Col><Col id=\"EN\">First Tab</Col></Row><Row><Col id=\"WORD_ID\">tab2</Col><Col id=\"KR\">2번째탭</Col><Col id=\"EN\">Second Tab</Col></Row><Row><Col id=\"KR\">한글</Col><Col id=\"EN\">Korean</Col><Col id=\"WORD_ID\">korean</Col></Row><Row><Col id=\"KR\">영어</Col><Col id=\"EN\">English</Col><Col id=\"WORD_ID\">english</Col></Row><Row><Col id=\"WORD_ID\">sort</Col><Col id=\"KR\">정렬</Col><Col id=\"EN\">sort</Col></Row><Row><Col id=\"WORD_ID\">colfix</Col><Col id=\"KR\">열고정</Col><Col id=\"EN\">column fix</Col></Row><Row><Col id=\"WORD_ID\">rowfix</Col><Col id=\"KR\">행고정</Col><Col id=\"EN\">row fix</Col></Row><Row><Col id=\"WORD_ID\">excel</Col><Col id=\"KR\">엑셀</Col><Col id=\"EN\">excel</Col></Row><Row><Col id=\"WORD_ID\">basicfunction</Col><Col id=\"KR\">기본기능</Col><Col id=\"EN\">basic function</Col></Row><Row><Col id=\"WORD_ID\">complicatedgrid</Col><Col id=\"KR\">복잡한 그리드</Col><Col id=\"EN\">complicated grid</Col></Row><Row><Col id=\"WORD_ID\">gridpersonal</Col><Col id=\"KR\">그리드개인화</Col><Col id=\"EN\">personalization grid</Col></Row><Row><Col id=\"WORD_ID\">listcount</Col><Col id=\"KR\">목록 갯수</Col><Col id=\"EN\">List count</Col></Row><Row><Col id=\"WORD_ID\">etorangers</Col><Col id=\"EN\">Eto Rangers</Col><Col id=\"KR\">꾸러기수비대</Col></Row><Row><Col id=\"WORD_ID\">sunday</Col><Col id=\"KR\">일요일</Col><Col id=\"EN\">Sunday</Col></Row><Row><Col id=\"WORD_ID\">monday</Col><Col id=\"KR\">월요일</Col><Col id=\"EN\">Monday</Col></Row><Row><Col id=\"WORD_ID\">tuesday</Col><Col id=\"KR\">화요일</Col><Col id=\"EN\">Tuesday</Col></Row><Row><Col id=\"WORD_ID\">wednesday</Col><Col id=\"KR\">수요일</Col><Col id=\"EN\">Wednesday</Col></Row><Row><Col id=\"WORD_ID\">thursday</Col><Col id=\"KR\">목요일</Col><Col id=\"EN\">Thursday</Col></Row><Row><Col id=\"WORD_ID\">friday</Col><Col id=\"KR\">금요일</Col><Col id=\"EN\">Friday</Col></Row><Row><Col id=\"WORD_ID\">saturday</Col><Col id=\"KR\">토요일</Col><Col id=\"EN\">Saturday</Col></Row><Row><Col id=\"KR\">월</Col><Col id=\"WORD_ID\">mon</Col><Col id=\"EN\">MON</Col></Row><Row><Col id=\"KR\">화</Col><Col id=\"WORD_ID\">tue</Col><Col id=\"EN\">TUE</Col></Row><Row><Col id=\"KR\">수</Col><Col id=\"WORD_ID\">wed</Col><Col id=\"EN\">WED</Col></Row><Row><Col id=\"KR\">목</Col><Col id=\"WORD_ID\">thu</Col><Col id=\"EN\">THU</Col></Row><Row><Col id=\"KR\">금</Col><Col id=\"WORD_ID\">fri</Col><Col id=\"EN\">FRI</Col></Row><Row><Col id=\"KR\">토</Col><Col id=\"WORD_ID\">sat</Col><Col id=\"EN\">SAT</Col></Row><Row><Col id=\"KR\">일</Col><Col id=\"WORD_ID\">sun</Col><Col id=\"EN\">SUN</Col></Row><Row><Col id=\"WORD_ID\">week</Col><Col id=\"KR\">주</Col><Col id=\"EN\">WEEK</Col></Row><Row><Col id=\"WORD_ID\">emp.name</Col><Col id=\"KR\">성명</Col><Col id=\"EN\">Name</Col></Row><Row><Col id=\"WORD_ID\">emp.id</Col><Col id=\"KR\">사원번호</Col><Col id=\"EN\">Emp. ID</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_gridPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"captionEN\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"userData\" type=\"STRING\" size=\"256\"/><Column id=\"upmenu\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">shapefix</Col><Col id=\"level\">0</Col><Col id=\"caption\">틀고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">shape fix</Col></Row><Row><Col id=\"id\">colfix</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">column fix</Col></Row><Row><Col id=\"id\">colfixfree</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">column fix free</Col></Row><Row><Col id=\"id\">rowfix</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">row fix</Col></Row><Row><Col id=\"id\">rowfixfree</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">row fix free</Col></Row><Row><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"level\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">filter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">grid filter</Col></Row><Row><Col id=\"id\">filterfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">grid filter free</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">replace</Col><Col id=\"level\">0</Col><Col id=\"caption\">찾기/바꾸기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">find/replace</Col></Row><Row><Col id=\"id\">colhide</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 숨기기/보이기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">column show/hide</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">excel</Col><Col id=\"level\">0</Col><Col id=\"caption\">엑셀</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">excel</Col></Row><Row><Col id=\"id\">export</Col><Col id=\"level\">1</Col><Col id=\"caption\">내보내기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">excel</Col><Col id=\"captionEN\">export</Col></Row><Row><Col id=\"id\">import</Col><Col id=\"level\">1</Col><Col id=\"caption\">가져오기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">excel</Col><Col id=\"captionEN\">import</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">personal</Col><Col id=\"level\">0</Col><Col id=\"caption\">현재포맷저장</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">saving current format</Col></Row><Row><Col id=\"id\">initial</Col><Col id=\"level\">0</Col><Col id=\"caption\">초기상태로</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">initialization</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("PMS");
            this.set_screenid("Desktop_screen,Screen0");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1024","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("PMS");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_titlebarheight("24");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("0,60,*,20");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("LoginFrame",null,null,null,null,null,null,"FrameBase::Frame_Login.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_dragmovetype("none");
            frame1.set_showtitleicon("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Frame_Login.xfdl");


            var frame2 = new ChildFrame("TopFrame",null,null,null,null,null,null,"FrameBase::Frame_Top.xfdl",frame0);
            frame2.set_showtitlebar("false");
            frame2.set_showstatusbar("false");
            frame2.set_showtitleicon("false");
            frame0.addChild(frame2.name, frame2);
            frame2.set_formurl("FrameBase::Frame_Top.xfdl");


            var frame3 = new HFrameSet("HFrameSet",null,null,null,null,null,null,frame0);
            frame3.set_separatesize("200,*");
            frame0.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"FrameBase::Frame_Left.xfdl",frame3);
            frame4.set_showtitlebar("false");
            frame4.set_showstatusbar("false");
            frame4.set_dragmovetype("none");
            frame4.set_showtitleicon("false");
            frame3.addChild(frame4.name, frame4);
            frame4.set_formurl("FrameBase::Frame_Left.xfdl");


            var frame5 = new VFrameSet("VFrameSet1",null,null,null,null,null,null,frame3);
            frame5.set_separatesize("35,*,0");
            frame3.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("MdiFrame",null,null,null,null,null,null,"FrameBase::Frame_Mdi.xfdl",frame5);
            frame6.set_showtitlebar("false");
            frame6.set_dragmovetype("none");
            frame6.set_showtitleicon("false");
            frame5.addChild(frame6.name, frame6);
            frame6.set_formurl("FrameBase::Frame_Mdi.xfdl");


            var frame7 = new ChildFrame("MainFrame",null,null,null,null,null,null,"FrameBase::Frame_Main.xfdl",frame5);
            frame7.set_showtitlebar("false");
            frame7.set_showtitleicon("false");
            frame7.set_dragmovetype("none");
            frame5.addChild(frame7.name, frame7);
            frame7.set_formurl("FrameBase::Frame_Main.xfdl");


            var frame8 = new FrameSet("WorkFrame",null,null,null,null,null,null,frame5);
            frame8.set_showtitlebar("false");
            frame8.set_showtitleicon("false");
            frame5.addChild(frame8.name, frame8);

            var frame9 = new ChildFrame("BottomFrame",null,null,null,null,null,null,"FrameBase::Frame_Bottom.xfdl",frame0);
            frame9.set_showtitlebar("false");
            frame9.set_showstatusbar("false");
            frame9.set_dragmovetype("none");
            frame9.set_showtitleicon("false");
            frame0.addChild(frame9.name, frame9);
            frame9.set_formurl("FrameBase::Frame_Bottom.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
            this.addEventHandler("onerror",this.Application_onerror,this);
        };
        
        // script Compiler
        this.registerScript("PMS.xadl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath
        *  @FileName
        *  @Creator 	soojeong
        *  @CreateDate 	2017.03.09
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	soojeong 	           최초 생성
        *  2017.10.17     	kyk       	           주석 정비
        *******************************************************************************
        */

        /************************************************************************************************
         * application 변수 선언 영역
        ************************************************************************************************/
        this.av_VFrameSet  = "";
        this.av_LoginFrame = "";
        this.av_HFrameSet  = "";
        this.av_TopFrame   = "";
        this.av_LeftFrame  = "";
        this.av_VFrameSet1 = "";
        this.av_WorkFrame  = "";
        this.av_MainFrame  = "";
        this.av_MdiFrame   = "";

        this.av_MenuColumns = {
        	menuId : "MENU_ID",    //  MENU ID
        	menuNm : "MENU_NAME",
        	menuUrl : "PRGM_FULL_PATH",
        	groupId : "PA_MENU_ID",
        	menuLevel : "LEVEL"    //메뉴레벨
        };

        this.av_MaxForm = 15;     //열린 메뉴 최대 갯수

        /***********************************************************************************************
        * Application EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/

        /**
         * @description Applicaton onload시 처리내역
        */
        this.Application_onload = function(obj,e)
        {
        	var objApp = nexacro.getApplication();

        	// Frame 변수 저장
        	this.av_VFrameSet  = objApp.mainframe.VFrameSet;                                			//VFrameSet
        	this.av_LoginFrame = objApp.mainframe.VFrameSet.LoginFrame; 				   				//LoginFrame
        	this.av_HFrameSet  = objApp.mainframe.VFrameSet.HFrameSet;                      			//HFrame
        	this.av_TopFrame   = objApp.mainframe.VFrameSet.TopFrame;  								    //TopFrame
        	this.av_BottomFrame = objApp.mainframe.VFrameSet.BottomFrame;                     			//Bottom frame
        	this.av_LeftFrame  = objApp.mainframe.VFrameSet.HFrameSet.LeftFrame;            			//leftFrame
        	this.av_VFrameSet1 = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1;           			//VFrameSet1
        	this.av_WorkFrame  = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.WorkFrame;              //WorkForm
        	this.av_MainFrame  = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.MainFrame;  			//mainform
        	this.av_MdiFrame   = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.MdiFrame;  			//mdi frame

            var nRunMode = 0;

        	//Local NexacroBrowser
        	if (system.navigatorname == "nexacro") {
        	    nRunMode = "0";
        		objApp.mainframe.set_titletext("Local NexacroBrowser - " + objApp.mainframe.titletext);
        	}
        	// WebBrowser
        	else {
        		var urlPath = window.location.protocol + "//" + window.location.host;
                // http://172.10.20.30:8088 or http://localhost:8080

                // service URL 설정
        		var objSrv = nexacro.getEnvironment().services["SvcUrl"];
        		objSrv.set_url(urlPath+"/nexacro17svc/");
                // http://172.10.20.30:8088/nexacro17svc/ or http://localhost:8080/nexacro17svc/

        		//Local WebBrowser
        	    if (objSrv.url.indexOf("localhost") > -1 || objSrv.url.indexOf("127.0.0.1") > -1 ) {
        			nRunMode = "1";
        			objApp.mainframe.set_titletext("Local WebBrowser - " + objApp.mainframe.titletext);
        		}
        		//운영
        		else {
        		    nRunMode = "2";
        		}
        	}
        	nexacro.setEnvironmentVariable("ev_runMode", nRunMode);

        };

        /**
         * @description ESC 통신중단 방지
        */
        this.Application_onerror = function(obj,e)
        {
        	trace("Application_onerror");
        	trace("e.statuscode : " + e.statuscode);
        	trace("e.errormsg : " + e.errormsg);

        	// 사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리
        	if (e.errorcode == -2147418039) {
        		//return true;
        	}
        };
        });

        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::PMS_CSS.xcss");
        this.loadIncludeScript("PMS.xadl");
    };
}
)();
