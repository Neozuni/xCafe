<%--
  Created by IntelliJ IDEA.
  User: zunix
  Date: 2017. 11. 30.
  Time: AM 10:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>글쓰기</title>
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
</head>
<body>

<font face="HY나무L" size="5"><strong>글쓰기 <br><br></strong></font>
<form action="${pageContext.request.contextPath}/write.do" method="post" name="write_form">

    <table>
        <tr>
            <td>제목</td>
            <td>
                <input type="text" name="title" maxlength="100" size="30">
            </td>
        </tr>

        <tr>
            <td colspan="2">
                <textarea cols="35" rows="10" name="content"></textarea>
            </td>
        </tr>



        <tr>
            <td colspan="2"  >
                <img src="/resources/img/confirm.gif"  onclick="content_submit()">
                <div class="btn">
                    <a href="#" id="btn_idSearch" class="btn_find" onclick="">아이디 찾기</a>
                </div>
            </td>
        </tr>
    </table>
</form>

</body>
</html>
