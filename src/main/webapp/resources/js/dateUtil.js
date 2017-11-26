/**
 * Script for Date & Calendar
 */

/**
* Datepicker
* @param e : 클릭한 달력의 object id
* @param startDt : 시작날짜 object id
* @param endDt : 종료날짜 object id
* @param isSetDate : editDt에 날짜를 세팅할지 여부
* @param dateDiff : 오늘 기준으로 이후 or 이전 일 계산
 */
function setDatepicker(e, startDt, endDt, isSetDate, dateDiff, format){
	
	var dateFormat = 'yy.mm.dd';
	
	if(format){
		
		dateFormat = format;
	}
	
	$("#"+e).datepicker({
		showOn: "button",
		buttonImage: "/resources/img/img_calender.gif",
		buttonImageOnly: true,
		
		dateFormat : dateFormat,
		showOtherMonths: true,
		selectOtherMonths: true,
		dayNamesMin : ['일','월','화','수','목','금','토'],
		dayNamesShort : ['일','월','화','수','목','금','토'],
		monthNames : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		changeMonth: true,
		changeYear: true,
		showMonthAfterYear: true,
		onClose: function(dateText, inst) {
			if (inst.id == startDt) {
				if(-1 < dateText.indexOf(".")){
					$("#"+endDt).removeClass('hasDatepicker').datepicker("option", "minDate", dateText);
				}else{
					var _dateText = dateText.replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3");
					$("#"+endDt).removeClass('hasDatepicker').datepicker("option", "minDate", _dateText);
				}
			}
		}
// 캘린더 위치조정 필요하면 주석 해제할것.
//		,beforeShow: function(input) {
//			var i_offset= $(input).offset();
//			setTimeout(function(){
//				$('#ui-datepicker-div').css({'top':i_offset.top+ 35, 'bottom':'', 'left':i_offset.left});
//			})
//		}
	}).on("focus", function(event) {
		var _date = $(this).val().replace(/\./g, "");
		$(this).val(_date);

	}).on("blur", function(event) {
		if(format == 'yy.mm'){
			var _date = $(this).val().replace(/(\d{4})(\d{2})/, "$1.$2");	
		}else{
			var _date = $(this).val().replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3");
		}
		
		$(this).val(_date);
		if(_date && !'' == _date){
			//alert(_date);
			if(!checkDateFormat(_date)) $(this).focus();
		}

// 여기서 minDate를 설정하게 되면 깊은 빡침을 경험하게 될거임. 단, 테스트는 여러방면으로 해야할것임.
//		if (event.target.id == startDt) {
//			$("#"+endDt).datepicker("option", "minDate", _date);
//		}
	});

	//디폴트 날짜 설정해야되는경우
	if(isSetDate){
		var _date = new Date();
        if(dateDiff != 0){
			_date.setDate(_date.getDate()+dateDiff);
		}
		$("#" + e).val($.datepicker.formatDate("yy.mm.dd",_date));
	}

	//startDt가 있으면 이 값을 기준으로 minDate구해서 endDt에 셋팅.
	if("" != startDt && null != startDt){
		$("#"+endDt).datepicker("option", "minDate", $("#"+startDt).val());
	}

	//숫자만 입력가능케 설정
	$("#"+e).attr("onkeydown", "filterNum(event);");
	$("#"+e).css("ime-mode", "disabled");//한글입력 막음
}


/**
 * 달력
 * @param e : 클릭한 달력의 object id
* @param startDt : 시작날짜 object id
* @param endDt : 종료날짜 object id
* @param isSetDate : editDt에 날짜를 세팅할지 여부
* @param dateDiff : 오늘 기준으로 이후 or 이전 일 계산
* @param isMinDate : 최소 선택날짜 여부
* @param minDt : 최소 선택날짜
 */
function setDatepickerMinDate(e, startDt, endDt, isSetDate, dateDiff, isMinDate, minDt, format){
	setDatepicker(e, startDt, endDt, isSetDate, dateDiff, format);

	//최소 선택날짜 설정해야되는경우
	if(isMinDate){
		$( "#" + e ).datepicker( "option", "minDate", minDt );
	}
}


/**
 * 날짜 텍스트박스에 직접입력후 날짜형식 검증
 */
function checkDateFormat(inputDate){
	var isResult = true;

	if("" != inputDate){
		inputDate = $.trim(inputDate.replace(/\./g, ""));

		if(8 == inputDate.length){
			var changeDate = inputDate.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
			var date = new Date(changeDate);

			if("Invalid Date" == date.toDateString() || "NaN" == date.toDateString()){
				alert("8자리(yyyymmdd)의 날짜 규칙에 어긋납니다. ");
				isResult = false;
			}
		}else{
			alert("8자리(yyyymmdd)의 날짜 규칙에 어긋납니다. ");
			isResult = false;
		}
	}else{
		alert("8자리(yyyymmdd)의 날짜 규칙에 어긋납니다. ");
		isResult = false;
	}
	return isResult;
}

/**
 *
 * 날짜 체크
 * @param startDt : 시작일 object id
 * @param endDt : 종료일 object id
 * @param startHour : 시작시간 object id
 * @param endHour : 종료시간 object id
 * @param startMin : 시작시간의 분 object id
 * @param endMin : 종료시간의 분 object id
 * @returns {Boolean}
 */
function checkDate(startDt, endDt){
	if($(startDt).val() > $(endDt).val()){
		alert("날짜 선택이 잘못되었습니다.");
		$(endDt).focus();
		return false;
	}
	return true;
}
function checkHour(startHour, endHour){
	if($(startHour).val() > $(endHour).val()){
		alert("시간 선택이 잘못되었습니다.");
		$(endHour).focus();
		return false;
	}
	return true;
}
function checkMinutes(startMin, endMin){
	if($(startMin).val() > $(endMin).val()){
		alert("시간 선택이 잘못되었습니다.");
		$(endMin).focus();
		return false;
	}
	return true;
}