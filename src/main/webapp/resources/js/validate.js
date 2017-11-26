
/**
 * Required check in Form
 * 필수입력 항목에는 title, required 속성이 포함되어야 함.
 * ex) <input type='text' name='test' title='테스트' required> 
 * 
 * 사용가능 속성 
 * maxlength - 입력 최대 자리수 체크 <input type='text' name='test' title='테스트' maxlength='5'>
 * (함수내 분기 없음 브라우저에서 처리) 
 * minlength - 입력 최소 자리수 체크 <input type='text' name='test' title='테스트' minlength='3'> 
 * engNum - 영문 & 숫자 입력 체크 <input type='text' name='test' title='테스트' engNum> 
 * 
 */
function formValidationCheck(frmId){
	var isCheck = true;
	var objs = $('#'+frmId+' input[type=text]').add($('#'+frmId+' textarea')).add($('#'+frmId+' select'));
	objs.each(function() {
		var visible = $(this).is(':visible');
		$(this).val($.trim($(this).val()));
		if( visible && !$(this).prop("disabled")){
			if('' == $(this).val() && null != $(this).attr("required")){
				alert("" + $(this).attr("title") + " 을(를) 입력해주세요.");
				$(this).focus();
				isCheck = false;
				return false;
			}else if(null != $(this).attr("minlength") && $(this).attr("minlength") > $(this).val().length){
				alert("" + $(this).attr("title") +" 는(은) 최소"+ $(this).attr("minlength")+" 자리를 입력하여야 합니다.");
				$(this).focus();
				isCheck = false;
				return false;
			}else if( null != $(this).attr("engNum") && !(/^[a-zA-Z0-9]+$/.test($(this).val())) ){
				alert("" + $(this).attr("title") + " 는(은) 영문이나 숫자만 입력가능합니다.");
				$(this).focus();
				isCheck = false;
				return false;
			}
		}
	});
	return isCheck;
}

/**
 * 숫자만 입력
 * 숫자 이외 모든 입력을 막음.
 */
function onlyNumber(obj){
	if("" != obj.value){
		var regex = /^[0-9]+$/;
		var valid = regex.test(obj.value);
		if (valid == false) {
			alert("숫자만 입력 가능합니다.");
			obj.value = "";
		}
	}
}

/**
 * 텍스트 박스에 허용된 값 이외에는 입력금지
 * code : 110, 190 -> . 입력 허용
 * code : 8, 46, 37, 39 -> backspace, delete, 방향키 입력 허용
 * @param event
 */
function filterNum(event){
	var code = (window.event) ? event.keyCode : evt.which;
	var inputCode = [110,190,8,46,37,39];

	if ((code > 47 && code < 58) || (code > 95 && code < 106)) {
		//숫자허용
		return;
	}
	if(-1 < inputCode.indexOf(code)){
		return;
	}

	if(window.event){
		event.preventDefault();//모든 입력 막음
	}else{
		evt.preventDefault();//모든 입력 막음
	}

}

