<%--
  Created by IntelliJ IDEA.
  User: zunix
  Date: 2017. 12. 8.
  Time: AM 11:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>게시글 수정하기</title>
</head>
<body>
<form method="post" action="/updateBoard.do"
      <td cellpadding="5">
          <tr>
              <td>
                  <b> 글번호 : <input type=text name=id value=${bvo.id} readonly></input>
                      | 타이틀 : <input type="text" name="title" value="${bvo.title}"></input></b>
              </td>
          </tr></td>
      </td>
          <hr style="color:#6691BC;border-style:dotted;margin: 0">

    <tr>
        <td>
            <font size="2">작성자 : <input type="text" name="writer" value="${bvo.memberVO.userName}" readonly></input>
            | 작성일시 : ${bvo.createDate}
            </font>
        </td>
    </tr>

    <tr>
        <td>
            <hr style="color:#6691BC;margin: 0">
            <textarea rows="15" cols="75" name="content">${bvo.content}</textarea>
        </td>
    </tr>
    <tr>
        <td valign="middle">
            <input type="submit" value="수정하기"></input>
        </td>
    </tr>
      </table>

</body>
</html>
