<%--
  Created by IntelliJ IDEA.
  User: zunix
  Date: 2017. 12. 4.
  Time: PM 3:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <%--<%@ include file="/WEB-INF/jsp/include/inc_header.jsp" %>--%>
</head>
<script type="text/javascript">
    function deleteBoard() {
        if(confirm("해당 글을 삭제하시겠습니까?")){
            location.href="delete.do?id=${bvo.id}";
        }
    }

    function updateBoard() {
        if(confirm("해당 글을 수정하시겠습니까?")){
            location.href="updateView.do?id=${bvo.id}";
        }
    }

    $(document).ready(function(){

        //listReply(); // **댓글 목록 불러오기
        listReply2(); // ** json 리턴방식

        // ** 댓글 쓰기 버튼 클릭 이벤트 (ajax로 처리)
        $("#btnReply").click(function(){
            var replytext=$("#replytext").val();
            var bno="${dto.bno}"
            var param="replytext="+replytext+"&bno="+bno;
            $.ajax({
                type: "post",
                url: "${path}/reply/insert.do",
                data: param,
                success: function(){
                    alert("댓글이 등록되었습니다.");
                    listReply2();
                }
            });

</script>
<body>
<table cellpadding="5">
    <tr>
        <td>
            <table width="550">
                <hr style="color: #6691BC; margin: 0">
                <tr>
                    <td><b>글번호 : ${requestScope.bvo.id} |
                        타이틀 : ${requestScope.bvo.title}</b>
                        <hr style="color: #6691BC; border-style: dotted; margin: 0">
                    </td>
                </tr>
                <tr>
                    <td>작성자 :  ${requestScope.bvo.memberVO.userName} |
                        작성일시 : ${requestScope.bvo.createDate} <br>
                        Count : ${requestScope.bvo.count}
                        | 최종수정일 : ${requestScope.bvo.updateDate}

                    </td>
                </tr>
                <tr>
                    <td>
                        <hr style="color: #6691BC; margin: 0">
                        <pre>${requestScope.bvo.content}</pre>
                    </td>
                </tr>
                <tr>
                    <td valign="middle">
                        <a href="/">메인화면으로</a>
                        <a href="list.do"><img alt="목록" src="resources/img/list_btn.jpg"></a>
                        <!--
                        현재 로그인한 사람이 자신의 글을 상세보기로 볼때는
                        삭제, 수정버튼이 보여지도록 작성
                        ::
                        session.mvo==bvo.id
                        로그인한 사람이랑==현재 이 글을 보고 있는 사람
                        -->
                        <c:if test="${sessionScope.mvo.id==bvo.memberVO.id}">
                            <img alt="삭제" src="/resources/img/delete_btn.jpg" onclick="deleteBoard()">
                            <img alt="수정" src="/resources/img/modify_btn.jpg" onclick="updateBoard()">
                        </c:if>
                    </td>
                </tr>

                <div style="width:650px; text-align: center;">
                    <br>
                    <!-- **로그인 한 회원에게만 댓글 작성폼이 보이게 처리 -->
                    <c:if test="${sessionScope.mvo.id != null}">
                        <textarea rows="5" cols="80" id="replytext" placeholder="댓글을 작성해주세요"></textarea>
                        <br>
                        <button type="button" id="btnReply">댓글 작성</button>
                    </c:if>
                </div>
                <!-- **댓글 목록 출력할 위치 -->
                <div id="listReply"></div>

            </table>
        </td>
    </tr>
</table>
</body>
</html>

