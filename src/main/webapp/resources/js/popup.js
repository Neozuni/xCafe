var dimId = "bg_dim";
var activePopupArray = new Array();

/**
 * Dim 처리 (비활성화)
 */
function showDim(){
	$("#"+dimId).show();
}

/**
 * Dim 처리화면 해제
 */
function hideDim(){
	$("#"+dimId).hide();
	$("body").children("#wrap").css({"position":""});//use scrollbar when popup close(for calendar close)
}

/**
 * 팝업을 Dim 밑으로 내림(비활성화)
 * @param id
 */
function underDim(id){
	var popZIndex = $("#"+id).css("z-index");
	var dimZIndex = $("#"+dimId).css("z-index");
	if( !$.jStorage.get(id+"ZIndex") ){
		$.jStorage.set(id+"ZIndex",popZIndex);
	}

	$("#"+id).css("z-index",dimZIndex-1);

	return popZIndex;
}

/**
 * 팝업을 Dim 위로 올림(활성화)
 * @param id
 */
function overDim(id){
	var zIndex = $.jStorage.get(id+"ZIndex");
	if( zIndex ){
		$.jStorage.deleteKey(id+"ZIndex");
		$("#"+id).css("z-index",zIndex);
	}
}

/**
 * 팝업이 Dim 밑에 있는지 확인
 * @param id
 */
function isUnderDim(id){
	var popZIndex = $("#"+id).css("z-index");
	var dimZIndex = $("#"+dimId).css("z-index");

	return popZIndex < dimZIndex;
}

/**
 * 팝업이 Dim 위에 있는지 확인
 * @param id
 */
function isOverDim(id){
	var popZIndex = $("#"+id).css("z-index");
	var dimZIndex = $("#"+dimId).css("z-index");

	return popZIndex > dimZIndex;
}


/**
 * 팝업 노출
 * @param id
 */
function showPopup(id){
	$("#"+id).show();
	$("#"+id).focus();
	$("body").children("#wrap").css({"absolute":"fixed"});//unuse scrollbar when popup view(for calendar view)

	if( !activePopupArray ){
		activePopupArray = new Array();
	}
	activePopupArray.push(id);
}

/**
 * 팝업 숨김처리
 * @param id
 * @param callback
 */
function hidePopup(id,callback){
	$("#"+id).hide();
	if(id == 'htmlPopup'){
		deletePopup('htmlPapupContext');
	}else{
		deletePopup(id);
	}

	if( activePopupArray ){
		activePopupArray.pop();
	}
	if( callback ){
		callback();
	}
}

/**
 * 팝업div 에 추가된 html을 삭제
 * @param id
 */
function deletePopup(id){
	$("#"+id).empty();
}

/**
 * 현재 활성화된 팝업 Div id 이름을 리턴
 * 팝업이 아닐시 "mainPage" 값을 리턴
 * @return popupName
 */
function getActivePopupName(){
	if( activePopupArray ){
		if( activePopupArray.length > 0){
			return activePopupArray[activePopupArray.length-1];
		}else{
			return "mainPage";
		}
	}else{
		return "mainPage";
	}
}

/**
 * 배열에 누적된 팝업중 현재 활성화된 팝업의 index 리턴
 * 배열에 없으면 -1 리턴
 * @return popupIndex
 */
function getActivePopupIndex(){
	var nowPopName = getActivePopupName();
	return activePopupArray.indexOf(nowPopName);
}


/**
 * 팝업 컨트롤러
 * @param isShow : true(팝업호출), false(팝업끄기)
 */
function controllerPopup(isShow){
	var idx = getActivePopupIndex();
	if(isShow){
		if(0 > idx){
			showDim();
			showPopup("layerPopup0");
		}else{
			showDim();
			underDim("layerPopup"+idx);
			showPopup("layerPopup"+(idx+1));
		}
	}else{
		if(0 >= idx){
		   	hideDim();
		    hidePopup("layerPopup0");
		}else if(0 < idx){
		    hidePopup("layerPopup"+idx);
		    overDim("layerPopup"+(idx-1));
		}
	}
}
/**
 * 호출할 팝업명
 * @returns {String}
 */
function callPopupName(){
	var idx = getActivePopupIndex();
	if(0 > idx){
		return "layerPopup0";
	}else{
		return "layerPopup" + (idx+1);
	}
}