<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<nav>
	<div class="gnb_wrap mCustomScrollbar">
		<ul id="gnb">
		</ul>
	</div>
</nav>

<script type="text/javascript">
<%
String fowardUrl =  (String)request.getAttribute("javax.servlet.forward.request_uri");

int last = 0;
String url = "";
if(fowardUrl != null) {
	last = fowardUrl.lastIndexOf("/");
	url = fowardUrl.substring(0, last)+"/";
}
%>

	var curPageUrl = '<%=url%>';
	var menuList = new Array();
	<c:forEach var="out" items="${MENU}">
		var menu = new Object();
		menu.menuId = "${out.id}";
		menu.menuLevel = "${out.menuLevel}";
		menu.menuNm = "${out.menuNm}";
		menu.menuUrl = "${out.menuUrl}";
		menu.upMenuId = "${out.groupId}";
		
		menuList.push(menu);
	</c:forEach>
	
	var menuHtml ='';
	var depth1 = '';
	var depth2 = '';
	var depth3 = '';
	var curLevel = 0;
	console.log("menuList.length :" + menuList.length);
	$.each(menuList, function(idx, menu) {
		
		if(depth2 != '' && curLevel == 1 && menu.menuLevel == 0) {
			menuHtml += '</li></ul>';
		}
		if(depth2 != '' && curLevel == 1 && menu.menuLevel == 1) {
			menuHtml += '</li>';
		}
		if(depth2 != '' && curLevel == 1 && menu.menuLevel == 2) {
			menuHtml += '<ul class="depth_ul2">';
		}
		if(depth2 != '' && curLevel == 2 && menu.menuLevel == 0) {
			menuHtml +='		</ul>';
			menuHtml +='	</li>';
			menuHtml +='</ul>';
		}
		if(depth2 != '' && curLevel == 2 && menu.menuLevel == 1) {
			menuHtml +='	</ul>';
			menuHtml +='</li>';
		}
		
		if(menu.menuLevel == 0) {
			var classon = '';
			if(menuHtml == '') {
				//classon = 'on';
				showon = "display:none;"
			} else {
				classon = '';
				showon = "display:none;"
			}
			menuHtml +='<li class="depth1 gnb2 '+classon+'"><a href="#" onclick="depth1Click(this);">'+menu.menuNm+'</a>';
			menuHtml +='	<ul class="depth_ul1" style="'+showon+'">';
			depth1 = menu.menuId;
			curLevel = 0;
		}
		
		if(menu.menuLevel == 1) {
			var classon = '';
			if(menu.menuUrl.indexOf(curPageUrl) > -1) {
				classon = 'class="on"';
			}else {
				classon = '';
			}
			menuHtml += '		<li '+classon+'><a href="'+menu.menuUrl+'">'+menu.menuNm+'</a>';
			depth2 = menu.menuId;
			curLevel = 1;
		}
		
		if(menu.menuLevel == 2) {
			var classon = '';
			if(menu.menuUrl.indexOf(curPageUrl) > -1) {
				classon = 'class="on"';
			}else {
				classon = '';
			}
			menuHtml += '		<li '+classon+'><a href="'+menu.menuUrl+'">'+menu.menuNm+'</a></li>';
			depth3 = menu.menuId;
			curLevel = 2;
		}
	});
	
	if(curLevel == 2) {
		menuHtml += '			</ul>';
		menuHtml += '		</li>';
		menuHtml += '	</ul>';
		menuHtml += '</li>';
	}
	if(curLevel == 1) {
		menuHtml += '		</li>';
		menuHtml += '	</ul>';
		menuHtml += '</li>';
	}
	$("#gnb").append(menuHtml);
	
	$(".on").each(function() {
		
		if($(this).parent().is(".depth_ul1")) {
			$(this).parent().show();
			$(this).parent().parent().addClass("on");
		} else {
			$(this).parent().parent().parent().show();
			console.log($(this).parent().parent().parent().html());
			$(this).parent().parent().parent().parent().addClass("on");
		}
		
	});
	
	function depth1Click(aTag){
		//$(aTag).parent().trigger('click');
		var s = $(aTag).next().css("display");

		if(s == 'block') {
			$(aTag).next().slideUp(200);
			$(aTag).parent().removeClass('on');
		} else {
			$(aTag).next().slideDown(200);
			$(aTag).parent().addClass('on');
		}
	}
</script>