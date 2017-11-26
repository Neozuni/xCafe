/**
* callAjax-->DELETE 예정(VO 변환 완료되면)
*
* jquery ajax 호출
*
* @param _type : GET | POST
* @param _url : service url
* @param _data : json data
* @param _dataType : json | html
* @param _success : ajax 호출 성공 시 수행될 function
*/
function _ajax(_type, _url, _data, _dataType, _success){
	$.ajax({
		type : _type,
		url : _url,
		data : _data,
		dataType : (null != _dataType ? _dataType: "json"),
		contentType : "application/json; charset=utf-8",
		success : function(data, textStatus, jqXHR) {
			_success(data, textStatus, jqXHR);
		},
		beforeSend : function(){
			showLoading();
		},
		complete : function(){
			hideLoading();
		},
		error : function (jqXHR, textStatus, errorThrown){
			var errStatus = jqXHR.status;
			getDivLoadErrorMsg(errStatus, jqXHR, errorThrown);
			return false;
		}
	});
}

/**
* callAjax for DTO
*
* jquery ajax 호출
*
* @param _type : GET | POST
* @param _url : service url
* @param _data : form object
* @param _dataType : json | html
* @param _success : ajax 호출 성공 시 수행될 function
*/
function _ajaxSubmit(_type, _url, _frm, _dataType, _success){
	$(_frm).ajaxSubmit({
		type : _type,
		url : _url,
		dataType: (null != _dataType ? _dataType: "json"),
        contentType : "application/json; charset=utf-8",
		success : function(data, textStatus, jqXHR) {
			_success(data, textStatus, jqXHR);
		},
		beforeSend : function(){
			showLoading();
		},
		complete : function(){
			hideLoading();
		},
		error : function(response, status, xhr) {
			getDivLoadErrorMsg(response.status, xhr, response);
			return false;
		}
	});
}



/**
* callAjax for Data
*
* jquery ajax 호출
*
* @param _type : GET | POST
* @param _url : service url
* @param _data : json Object
* @param _dataType : json | html
* @param _success : ajax 호출 성공 시 수행될 function
*/
function _ajaxCall(_type, _url, _data, _dataType, _success){
	
	$.ajax({
		type: _type,
		url: _url,
		data : _data,
		dataType: (null != _dataType ? _dataType: "json"),
		success : function(data, textStatus, jqXHR) {
			_success(data, textStatus, jqXHR);
		},
		beforeSend : function(){
			showLoading();
		},
		complete : function(){
			hideLoading();
		},
		error : function(response, status, xhr) {
			getDivLoadErrorMsg(response.status, xhr, response);
			return false;
		}
	});
}


function getDivLoadErrorMsg(errStatus, xhr, response){
	if("400" == errStatus){
		alert("Bad Request Error\n잘못된 요청입니다.");
	}else if("401" == errStatus){
		alert("Unauthorized Access Error\n요청한 페이지에 대한 접근 권한이 없습니다.");
	}else if("403" == errStatus){
		alert("Unauthorized Access Error\n요청한 페이지에 대한 접근 권한이 없습니다.");
	}else if("404" == errStatus){
		alert("Page Not Found Error\n요청한 페이지를 찾을 수 없습니다.");
	}else if("500" == errStatus){
		alert("System Error\n시스템 에러가 발생하였습니다.");
	}else if("501" == errStatus){
		alert("Not Implemented\n지원하지 않는 기능입니다.");
	}else{
		alert(response);
	}
}

/**
 * form array -> json -->DELETE 예정(VO 변환 완료되면)
 * list화면 호출시
 * @param array
 * @returns
 */
function toJson(array) {
	var json = {};
	$.each(array, function(index, ele) {
		return json[ele.name] = ele.value;
	});

	return JSON.stringify(json);
}

/**
 * 건별 체크박스 클릭시 정보를 hidden 변수에 저장 or 제거
 * obj : 체크박스 object id
 * newSeq : 저장할 hidden 변수명(체크박스 value 저장)
 * ex.) editCheckData($("#id"), $("#newSeq"));
 */
function editCheckData(obj, newSeq){
	var selData = $.trim($(newSeq).val());
	var selDataArr = selData.split(",");
	var chk = $(obj).prop("checked");

	if(chk && "" == selData){
		$(newSeq).val($(obj).val());
		return;
	}

	if(chk){//checked, add data
		selDataArr.push($(obj).val());

	}else{//unchecked, remove data
		var idx = selDataArr.indexOf($(obj).val());
		if(idx > -1){
			selDataArr.splice(idx, 1);
		}
	}
	$(newSeq).val(selDataArr.join(","));
}

/**
 * 페이지 이동시 체크박스내용 유지하기
 * saveObj : 저장할 hidden 변수명(체크박스 value 저장)
 * checkboxName : 그룹 체크박스 이름
 * allCheckBoxObj : 전체 체크박스 object id
 * ex.) carryCheckData($("#saveObj"), 'checkboxName', $("#allCheckBoxObj"));
 */
function carryCheckData(saveObj, checkboxName, allCheckBoxObj){
	var reqArr = $(saveObj).val().split(",");
	$.each(reqArr, function(index, value){
		$("#" + checkboxName + value).prop("checked", true);
	});
	var groupChkLen = $("input[name="+checkboxName+"]:checkbox").length;
	var groupCheckedLen = $("input[name="+checkboxName+"]:checkbox:checked").length;

	if(groupChkLen == groupCheckedLen){
		$(allCheckBoxObj).prop("checked", true);
	}else{
		$(allCheckBoxObj).prop("checked", false);
	}
}

/**
 * 라디오버튼 클릭시 정보를 hidden 변수에 저장 or 제거
 * obj : 라디오버튼 object id
 * newSeq : 저장할 hidden 변수명(라디오버튼 value 저장)
 * ex.) editRadioBtnData($("#id"), $("#newSeq"));
 */
function editRadioBtnData(obj, newSeq){
	$(newSeq).val($(obj).val());
}

/**
 * 페이지 이동시 라디오버튼내용 유지하기
 * saveObj : 저장할 hidden 변수명(라디오버튼 value 저장)
 * checkboxName : 라디오버튼 이름
 * ex.) carryRadioBtnData($("#saveObj"), 'checkboxName', $("#allCheckBoxObj"));
 */
function carryRadioBtnData(saveObj, checkboxName){
	var objId = checkboxName + $(saveObj).val();
	if(0 < $("#" + objId).length){
		$("#" + objId).prop("checked", true);
	}
}

/**
 * 전체 체크박스 토글시 정보를 hidden 변수에 저장 or 제거
 * allCheckBoxObj : 전체 체크박스 object id
 * saveObj : 저장할 hidden 변수명(체크박스 value 저장)
 * checkboxName : 그룹 체크박스 이름
 * ex.) allCheckData($("#allCheckBoxObj"), $("#saveObj"), 'checkboxName');
 */
function allCheckData(allCheckBoxObj, saveObj, checkboxName) {
	var dataArr = [];

	// 값이 존재할 경우 배열로 변환
	if (saveObj.val() != "") {
		dataArr = saveObj.val().split(",");
	}

	// 전체 체크
	if (allCheckBoxObj.is(":checked")) {
		$("input[name=" + checkboxName + "]").each(function(index, ele) {
			// 배열 값에 없으면 추가
			var idx = dataArr.indexOf(ele.value);
			if(idx == -1) {
				dataArr.push(ele.value);
			}
		});
	}
	// 전체 체크 해제
	else {
		$("input[name=" + checkboxName + "]").each(function(index, ele) {
			// 배열 값에 있으면 삭제
			var idx = dataArr.indexOf(ele.value);
			if(idx > -1) {
				dataArr.splice(idx, 1);
			}
		});
	}
	saveObj.val(dataArr.join(","));
}

/**
 * 체크한 갯수제한
 * max : 500
 * param : cumulative = 체크데이터 누적변수
 */
function getCheckedCount(cumulative){
	if('' == $.trim($(cumulative).val())){
		return 0;
	}else{
		var cumulativeArr = $(cumulative).val().split(",");
		return cumulativeArr.length;
	}
}



/**
 * input 글자 수 체크
 */
function input_cal_byte(input_name, max_byte){
    var input_name_str, byte_count=0, input_name_length=0, one_str, ext_byte;
    input_name_str = new String(input_name.value);
    input_name_length = input_name_str.length;
    for (i=0;i<input_name_length;i++){
        one_str=input_name_str.charAt(i);
        if (escape(one_str).length > 4){
            byte_count+=3; // UTF-8 한글 3바이트
            // byte_count+=2; // KO16KSC5601 한글 2바이트
        }
        else if (one_str != '\r'){
            byte_count++;
        }
    }
    $("#byte").html(byte_count);
    if (byte_count > max_byte){
        ext_byte = byte_count - max_byte;
        alert('\n내용을 '+max_byte+'Byte 이상 입력하실수 없습니다.\n\n입력하신 내용 중 초과 '+ext_byte+'Byte는 자동 삭제 됩니다.\n');
        var str = input_cut_text(input_name,max_byte);
        var re_byte_count = 0;
        var re_one_str = "";
        var this_length = str.length;
        for (j=0;j<this_length;j++){
        	re_one_str=str.charAt(j);
            if (escape(re_one_str).length > 4){
                re_byte_count+=3; // UTF-8 한글 3바이트
                // byte_count+=2; // KO16KSC5601 한글 2바이트
            }
            else if (re_one_str != '\r'){
                re_byte_count++;
            }
        }
        $("#byte").html(re_byte_count);

    }
}

/**
 * input 글자 자르기
 */
function input_cut_text(input_name, max_byte){
    var input_name_str, byte_count=0, input_name_length=0, one_str;
    input_name_str = new String(input_name.value);
    input_name_length = input_name_str.length;
    for (i=0;i<input_name_length;i++){
        if (byte_count < max_byte){
            one_str=input_name_str.charAt(i);
            if (escape(one_str).length > 4){
                byte_count+=3;
            }
            else if (one_str != '\r'){
                byte_count++;
            }
        }
        else{
            input_name_str = input_name_str.substring(0,i);
            break;
        }
    }
    if ((byte_count%3) ==1 || (byte_count%3) ==2 || (max_byte%3) ==1 || (max_byte%3) ==2){
        input_name_length = (input_name_str.length-1);
        if (escape(input_name_str.charAt(input_name_length)).length > 4){
            input_name_str = input_name_str.substring(0,input_name_length);
        }
    }
    input_name.value = input_name_str;
    return input_name_str;
}

/**
 * 아이디 및 패스워드 문자열 체크
 */
function checkVal(str, ty){
	if(ty == "id"){
		chk1 = /^[a-z\d]{6,16}$/i;  //a-z와 0-9이외의 문자가 있는지 확인
    chk2 = /[a-z]/i;  //적어도 한개의 a-z 확인
    return chk1.test(str) && chk2.test(str);
	}else if(ty == "pwd"){
		chk1 = /^[a-z\d]{8,16}$/i;  //a-z와 0-9이외의 문자가 있는지 확인
    chk2 = /[a-z]/i;  //적어도 한개의 a-z 확인
    chk3 = /\d/;  //적어도 한개의 0-9 확인
    return chk1.test(str) && chk2.test(str) && chk3.test(str);
	}
}

/**
 * 로딩 화면 처리
 */
function showLoading(){

	$('#ajax_indicator').removeClass('display-none');
}

/**
 * 로딩 화면 종료
 */
function hideLoading(){

	$('#ajax_indicator').addClass('display-none');
}

/**
 *  입력컨텐츠에대한 글자 수 체크..
 * obj : 체크할 object Id.
 * maxByte : 최대 글자 수
 * byteTitle : alert창에 표시할 경고문구
 * byteObj : byte 출력할 object Id or null.
 * ex.) fnChkByte(this, 4000 ,title , $("#byteInfo"));
 */
function fnChkByte(obj, maxByte , byteTitle, byteObj){

 	var objStr, objByte = 0, cutByte="";
 	objStr = new String(obj.value);
 	objStr = objStr.replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/%00/g, '&#77;').replace(/--/g, '&#45;&#45;').replace(/!/g, '&#33;').replace(/%/g, '&#37;').replace(/\'/g, '&#39;').replace(/\"/g, '&#34;');
	var objByte = getByteCnt( obj, byteObj );

	if(maxByte < objByte ){
		alert(byteTitle+"은(는) "+ maxByte +"Byte까지 입력가능 합니다.");
		var str = objStr;
		var b = 0, c;
		var objLength = objStr.length;

		for (var i=0; i<objLength; i++) {
			c = str.charCodeAt(i);
			b += (c>>11 ? 3 : c>>7 ? 2 : 1);
			if (b >= maxByte) {
				cutByte += str.substring(0,i);
				break;
			}
		}
		obj.value = cutByte.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&#77;/g, '%00').replace(/&#45;&#45;/g, '--').replace(/&#33;/g, '!').replace(/&#37;/g, '%').replace(/&#39;/g, '\'').replace(/&#34;/g, '\"');

		getByteCnt( obj, byteObj );

		return true;
	}else{
		return false;
	}
}

/**
 *  입력한 글자 byte 체크..
 * objId : byte 체크할 object Id.
 * printId : alert창에 표시할 경고문구
 * byteObj : byte 출력할 object Id or null.
 * ex.) getByteCnt( $("#desc"), $("#notice_byteInfo") );
 */
function getByteCnt ( objId, printId ){
	var objStr, objByte = 0;
		objStr = $(objId).val();
		objStr = objStr.replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/%00/g, '&#77;').replace(/--/g, '&#45;&#45;').replace(/!/g, '&#33;').replace(/%/g, '&#37;').replace(/\'/g, '&#39;').replace(/\"/g, '&#34;');
		objByte = (function(s,b,i,c){
		for(b = i = 0 ;c = s.charCodeAt(i++); b+= c>>11 ? 3 : c>>7 ? 2 : 1);
			return b;
		})(objStr);
		if(printId != null){
			$(printId).text(objByte);
		}

		return objByte;
}


//웹 취약성 관련 리플레이스
function replaceAll(str) {

	if(str != null){
		str = str.replace( /&lt;/g, "<");
		str = str.replace( /&gt;/g, ">");
		// 패턴 확인 후 추가
	}

	return str;
}

/**
 * Edtitor Text Request필터 우회용 함수
 * @param editorHtml - html 값 (String)
 * @param encode - 인코딩 해서 리턴할건지 (boolean)
 */
function editorXssFilter(editorHtml,encode){
	// 삭제대상 html 엘리먼트
	var xssElement = ["script","iframe","applet","xmp","base","frame","frameset","layer","bgsound"];
	// 삭제대상 속성이름
	var xssAttribute = ["onbefore","onmouseup","onrowenter","oncontextmenu","onpaste","onresize","onselect","onblur","onstart","onfocusin","onhelp","onmousewheel","ondataavailable","onafteripudate","onmousedown","onbeforeactivate","onbeforecopy","onbeforedeactivate","ondatasetchaged","onbeforeprint","onbeforepaste","onbeforeeditfocus","onbeforeuload","onbeforeupdate","onpropertychange","ondatasetcomplete","oncellchange","onlayoutcomplete","onselectionchange","onrowsinserted","oncontrolselected","onreadystatechange","onactive","oncut","onclick","onchange","onbeforecut","ondbclick","ondeactivate","ondrag","ondragend","ondragleave","ondragover","ondragstart","ondrop","onerror","onfinish","onfoucus","onkeydown","onrowsdelete","onmouseleave","onfocusout","onkeyup","onkeypress","onload","onbounce","onmouseenter","onmouse","onmouseover","onsubmit","onmouseend","onresizestart","onuload","onselectstart","onreset","onmove","onstop","onrowexit","onerrorupdate","onfilterchage","onlosecapture","onmousemove"];
	var object = $("<div>"+editorHtml+"</div>");
	for(var i=0; i<xssElement.length; i++){
		object.find(xssElement[i]).remove();
	}
	for(var i=0; i<xssAttribute.length; i++){
		object.find("*").removeAttr(xssAttribute[i]);
	}
	// 확인대상 속성이름
	xssAttribute = ["src","lowsrc","dynsrc","href","background","style","url","content"];
	// 삭제 대상 속성값
	var xssAttributeValue = ["javascript","vbscript","livescript","mocha","expression"];
	for(var i=0; i<xssAttribute.length; i++){
		object.find("*").attr(xssAttribute[i],function(idx, attr){
			if( attr ){
				for(var j=0; j<xssAttributeValue.length; j++){
					var attrData = attr.toLowerCase().trim().replace("\n","");
					if(attrData.indexOf(xssAttributeValue[j]) > -1){
						attr = "";
					}

				}
			}
			return attr;
		});
	}
	if( encode ){
		return encodeURIComponent(object.html());
	}else{
		return object.html();
	}
	
}
/**
 *  null or undefined 체크하여 공백으로 리턴
 * @param String 
 */
function checkNull(str){
	if(str){
		return str;
	}else{
		return "";
	}
}

/**
 * 숫자를 입력하면 숫자 3자리마다 콤마를 입력하여 리턴
 */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getJsonFromJsonArr(target, searchKey, searchValue){
	
	for (var int = 0; int < target.length; int++) {
		if(target[int][searchKey] == searchValue){
//			console.log('target[int][returnKey]', target[int][returnKey]);
			return target[int];
		}
	}
}

/*url의 파라미터를 json 객체로 변환*/
function convertParamsToJsonObj(params){

	var paramsArr = params.split('&');
	
	var jsonObj = {};

	$.each(paramsArr, function(idx, data){

	  jsonObj[data.split('=')[0]] = data.split('=')[1];
	  
	});

	return jsonObj;
}

/*oracle LPAD 와 동일*/
function lpad(originalstr, length, strToPad) {
	while (originalstr.length < length)
		originalstr = strToPad + originalstr;
	return originalstr;
}

//혜택 팝업 이벤트 핸들러
var benefitDetailPop = function(benefitId) {
	
	var _data = {};
	_data.benefitId = benefitId;

	$("#"+callPopupName()).load( '/display/benefit/benefitDetailPopup', _data, function(response, status, xhr){
		var result = xhr.status;
		if("200" == result){	
			controllerPopup(true);
		}else{
			getDivLoadErrorMsg(result, xhr, xhr.statusText);
		}
	});
}

function checkEmail(emailObj) {
	//이메일 유효성 정규식검사 
	var regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	if( !$(emailObj).val() ){
	   alert("이메일주소를 입력 해 주세요"); 
	   $(emailObj).focus(); 
	   return false; 
	} else {
	   if(!regExp.test($(emailObj).val())) { 
	      alert("이메일 주소가 유효하지 않습니다"); 
	      $(emailObj).focus(); 
	      return false; 
	   } 
	}
}
