<%--
  Created by IntelliJ IDEA.
  User: zunix
  Date: 2017. 11. 29.
  Time: PM 11:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
</head>
<body>
<center><h2>로그인 결과 출력..</h2></center><p>
    <c:choose>
    <c:when test="${sessionScope.vo==null }">
    <script type="text/javascript">
        alert("로그인 부터하세요 로그인페이지로 이동합니다...");
        location.href="/";
    </script>
    </c:when>
    <c:otherwise>
    <script type="text/javascript">
        alert("${sessionScope.vo.userName} 님 로그인 성공하셨어여!!");
        location.href="/";
    </script>
    </c:otherwise>
    </c:choose>
</body>
</html>
