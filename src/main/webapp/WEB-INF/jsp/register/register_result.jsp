<%--
  Created by IntelliJ IDEA.
  User: zunix
  Date: 2017. 11. 29.
  Time: PM 7:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>회원가입 완료</title>
    <%@ include file="/WEB-INF/jsp/include/inc_header.jsp" %>
</head>
<body>
회원 가입이 완료되었습니다 <br>
${param.values}님 회원가입 OK!!
</body>
</html>