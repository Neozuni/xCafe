/*
***********************************************
* @description    : 자바스크립트 > 공통 
***********************************************
*/

$(document).ready(function(){
/*
	// GNB 메뉴
	$("#gnb>li>a").each(function(index){
		$("#gnb>li>a").eq(index).click(function(){
			if( $(this).next().css("display") == "block" ){
				$(this).next().slideUp(200);
				return false;
			} else {
				$(this).next().slideDown(200);
				return false;
			};
		});
	});
*/
	// Skip Navigation (크롬에서 포커스 이동 오류 해결)
	$(function() {
		$('#skip_navi a').each(function(){
			$(this).click(function(){
				var thishref = $(this).attr('href');
				$(thishref).attr('tabindex','-1');
				$(thishref).focus();
			})
		})
	});

	// 날짜 선택 버튼
	$('.term_list > li a').click(function() {
		$('.term_list > li a').removeClass('on');
		$(this).addClass('on');
	});

	// 코드관리 : 카테고리 선택
	$(".cate > li").each(function(index){
		$(".cate > li").eq(0).addClass('on');
		$(".cate > li").eq(index).click(function(){
			$(".cate > li").removeClass('on');
			$(this).addClass('on');
			return false;
		});
	});

	$(".cate2 > li").each(function(index){
		$(".cate2 > li").eq(0).addClass('on');
		$(".cate2 > li").eq(index).click(function(){
			$(".cate2 > li").removeClass('on');
			$(this).addClass('on');
			return false;
		});
	});

	$(".cate3 > li").each(function(index){
		$(".cate3 > li").eq(0).addClass('on');
		$(".cate3 > li").eq(index).click(function(){
			$(".cate3 > li").removeClass('on');
			$(this).addClass('on');
			return false;
		});
	});


	// tab
	/*
	$("#tab li>a").each(function(index){
		$("#tab li>a").eq(index).click(function(){
			$("#tab li>a").removeClass('on');
			$(this).addClass('on');
			$(".ctab").hide();
			$(".ctab").eq(index).show();
			return false;
		});
	});
	*/

	// Tooltip
	/*
	$(".tip_posi a").each(function(index){
		$(".tip_posi a").eq(index).mouseover(function(){
			$("#tip"+(index+1)).show();
			return false;
		});
		$(".tip_posi a").eq(index).mouseleave(function(){
			$(".tooltip").hide();
			return false;
		});
	});
	*/


	/**
	 * serializeObject
	 * desc   : form의 데이터를 json 형태로 변환해 준다.
	 * return : 성공시에는 객체(JSON)을 리턴한다. 실패시에는 null을 리턴한다.
	 */
	$.fn.serializeObject = function() {
	  var obj = null;
//	  var flag = true;
	  var form = $(this[0]);

	  try {
	    if ( this[0].tagName && this[0].tagName.toUpperCase() == "FORM" ) {
	      var arr = this.serializeArray();
	      if ( arr ) {
	        obj = {};
	        jQuery.each(arr, function() {
	        	var target = form.find('[name='+this.name+']');
/*	        	
	        	if(target.attr('required') && this.value.length == 0){
	        		console.log("경고", target.attr('msg')+'은[는] 필수 입력 항목입니다.', target);
	        		flag = false;
	        	}
*/	        	
	        	if(!target.is(':disabled')){
	        		if(target.is(':checkbox') && obj[this.name]){
	        			obj[this.name] = obj[this.name]+','+this.value;
	        		}else{
	        			obj[this.name] = this.value;	
	        		}
	        			
	        	}
	        });				
	      }
 		}
	    
	    return obj;
/*	    
	    if(flag){
	    	return obj;
	    }else{
	    	return null;
	    }
*/	    
	  }catch(e) {
		  console.log('경고', e.message);
	  }
	  finally  {}
		  
	};



});


// GNB Scroll 플러그인
(function($){
	$(window).load(function(){
		$("a[rel='load-content']").click(function(e){
			e.preventDefault();
			var url=$(this).attr("href");
			$.get(url,function(data){
				$(".mCSB_container").append(data); //load new content inside .mCSB_container
				//scroll-to appended content 
				$().mCustomScrollbar("scrollTo","cont:last");
			});
		});
		
		$().delegate("a[href='top']","click",function(e){
			e.preventDefault();
			$().mCustomScrollbar("scrollTo",$(this).attr("href"));
		});
		
	});
})(jQuery);

// layer show/hide
function showLayer(id) {
	document.getElementById(id).style.display = "block";
}
function hideLayer(id) {
	document.getElementById(id).style.display = "none";
}