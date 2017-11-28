<!DOCTYPE html>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />

<%--
  Created by IntelliJ IDEA.
  User: zunix
  Date: 2017. 11. 27.
  Time: PM 7:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>RegisterMember Page</title>
<script type="text/javascript">
    function checkReg() {
        var f = document.regFrom;

        if(f.userId.value==""){
            alert("아이디를 입력하세요");
            return;
        } else if (f.password.value==""){
            alert("패스워드를 입력하세요");
            return;
        } else if (f.userName.value==""){
            alert("이름을 입력하세요");
            return;
        } else if (f.phone.value==""){
            alert("전화번호를 입력하세요");
            return;
        } else if (f.email.value==""){
            alert("이메일주소를 입력하세요");
            return;
        } else if(f.flag.value==""){
            alert("아이디 중복체크를 하세요");
            return;
        }
        f.submit(); // javascript 에서 폼으로 입력값을 url 전송
    }

    function idCheck() { // 아이디 체크 눌렀을때 호출
        var cid = document.regForm.userId.value;
        if(cid==""){
            alert("아이디를 입력후 중복확인 해주세요");
        }else {
            window.open("idcheck.do?id="+cid,"","resizable=no,toolbar=no,width=200,height=200");
        }
    }
</script>
</head>
<body>

<h2 align="center"> Register Form ... </h2>
    <form name="regForm" action="register.do" method="post">
        ID <input type="text" name="userId">

        <input type="button" value="중복확인" onclick="idCheck()"><br><br>
        <input type="hidden" name="idFlag" value="">

        PASS<input type="password" name="password"><br><br>
        NAME<input type="text" name="userName"><br><br>
        EMAIL<input type="email" name="email"><br><br>
        PHONE<input type="text" name="phone">

        <input type="button" value="회원가입" onclick="checkReg()">

    </form>
</body>
</html>
