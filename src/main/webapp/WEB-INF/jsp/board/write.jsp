<%--
  Created by IntelliJ IDEA.
  User: zunix
  Date: 2017. 11. 30.
  Time: AM 10:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html lang="ko">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <%@ include file="/WEB-INF/jsp/include/inc_header.jsp" %>
    <title>글쓰기</title>


</head>
<body>

<script type="text/javascript">
    function content_submit(){
        var f=document.write_form;
        if(f.title.value==""){
            alert("제목을 입력하세요!");
            f.title.focus();
            return;
        }
        if(f.content.value==""){
            alert("내용을 입력하세요!");
            f.content.focus();
            return;
        }
        f.submit();
    }
</script>
<font face="HY나무L" size="5"><br><strong>글쓰기<br><br></strong></font>
<form action="${pageContext.request.contextPath}/write.do" method="post" name="write_form">

    <table>
        <tr>
            <td>글 제목 :
                <input type="text" name="title" maxlength="100" size="30"></td>
        </tr>

        <tr>
            <td colspan="2">
                <textarea cols="35" rows="10" name="content" ></textarea>
            </td>
        </tr>



        <tr>
            <td colspan="2"  >
                <img src="/resources/img/confirm.gif"  onclick="content_submit()">
                <br><br>
                <div class="btn">
                    <a href="/list.do">글목록으로</a>
                    <a href="/">메인화면으로</a>
                </div>
            </td>
        </tr>

    </table>
</form>

</body>
</html>
