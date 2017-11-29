<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<header>
	<div id="header">
		<h1><a href="/sitemap/list"><img src="/resources/img/h1_logo.png" alt="KIWI"></a></h1>
		<div class="top">
			<h2>KIWI Operating Management System</h2>
			<div class="user">
				<p><strong>[<sec:authentication property="principal.username"/>]</strong>님이 로그인 하셨습니다. ${ADM_LAST_DT}</p>
				<div class="btn">
					<!-- <a href="#" id="btn_myInfo" class="btn_my" title="새창 열림" >MY</a> --> <!-- #@ 나의 정보 관리가 메뉴로 변경 -->
					<a href="#" id="btn_logout" class="btn_logout">Logout</a>
				</div>
			</div>
		</div>
	</div>
</header>
<script type="text/javascript">
jQuery(document).ready(function (){
	//로그아웃 버튼 이벤트
	jQuery("#btn_logout").click(function(){
		if(confirm("로그아웃을 하시겠습니까?")){
			document.location.href="/logout/session";
			//document.location.href="j_spring_security_logout";
		}else{
			return false;
		}
	});

});
</script>