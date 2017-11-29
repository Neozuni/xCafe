<!DOCTYPE html>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="ko">
<head>
    <title>Login</title>
    <%@ include file="/WEB-INF/jsp/include/inc_header.jsp" %>
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
                            <input type="text" id="userId" name="userId" placeholder="ID를 입력하세요" title="ID" maxlength="16" >
                            <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" title="Password" maxlength="16" onKeyPress="if (event.keyCode==13){ goLoginProcess();event.returnValue=false}">
                            <a class="btn_login" id="btn_login">로그인</a>
                        </div>

                        <div class="btn">
                            <a href="/register" class="btn_member" type="submit">회원가입</a>
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

    function goLoginProcess(){
        if($("#username").val() == ""){
            alert("아이디를 입력하여 주세요");
            return false;
        }
        if($("#password").val() == ""){
            alert("비밀번호를 입력하여 주세요");
            return false;
        }

        jQuery("#loginFrm").attr("action","login.do");
        jQuery("#loginFrm").submit();

    }

    jQuery(document).on("click", "#btn_login", function(){
        goLoginProcess();
    });

</script>
</body>
</html>
