<%--
  Created by IntelliJ IDEA.
  User: zunix
  Date: 2017. 12. 5.
  Time: PM 3:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>목 록</title>
</head>
<body>
<table border="1" width="650" cellpadding="2">
        <tr>
            <th width="10%"> 번 호 </th>
            <th width="50%"> 제 목 </th>
            <th width="15%"> 작성자 </th>
            <th width="15%"> 작성일 </th>
            <th width="10%"> 조회수 </th>
        </tr>
        <%--@@@ 이부분 수정&점검 필요--%>
        <c:forEach items="${list}" var="board">
        <tr>
            <td align="center">${board.id}</td>
            <td align="left"><a href="/showContent.do?id=${board.id}"> ${board.title}</a> </td>
            <td align="center">${board.memberVO.userName}</td>
            <td align="center">${board.createDate}</td>
            <td align="center">${board.count}</td>
        </tr>
        </c:forEach>
    </table><p>
    <a href="${pageContext.request.contextPath/index.jsp}">홈으로 ~ (우선index.jsp로 연결함)</a>

</body>
</html>
