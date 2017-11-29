<!DOCTYPE html>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="ko">
<head>
    <title>Login</title>
</head>
<!-- wrap -->
<body>
<div id="wrap">
    <div class="main">
        <div class="login">
            <div class="form_area">
                <form id="loginFrm" name="loginFrm" method="post">
                    <fieldset>
                        <legend><span> Login</span></legend>
                        <div class="form_input">
                            <input type="text" id="username" name="username" placeholder="Enter username" title="ID" maxlength="16" >
                            <input type="password" id="userPass" name="userPass" placeholder="Enter password" title="Password" maxlength="16" onKeyPress="if (event.keyCode==13){ goLoginProcess();event.returnValue=false}">
                            <a class="btn_login" id="btn_login">로그인</a>
                        </div>
                        <div class="btn">
                            <a href="/user/join" class="btn_member">운영자 회원가입</a>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="comment">
                <p class="txt">
                    · 지정된 아이디와 비밀번호를 입력해주세요.<br />
                    · 아이디/비밀번호를 잊은 경우, 아이디 찾기 또는 비밀번호 재설정 버튼을 클릭해주세요.
                </p>
                <div class="btn">
                    <a href="#" id="btn_idSearch" class="btn_find">아이디 찾기</a>
                    <a href="#" id="btn_pwdSearch" class="btn_find">비밀번호 재설정</a>
                </div>
            </div>

        </div>
        <!-- //login -->
    </div>
    <!-- //main -->

</div>
<!-- //wrap -->
<script type="text/javascript">


</script>
</body>
</html>
