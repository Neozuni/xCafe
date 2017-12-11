<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/include/inc_common.jsp" %>
<meta charset="utf-8">
<meta http-equiv='X-UA-Compatible' content='IE=edge' />
<META http-equiv="Pragma" content="no-cache">
<META http-equiv="Expires" content="-1">
<META http-equiv="Cache-Control" content="No-Cache">
<link type="text/css" rel="stylesheet" href="/resources/css/jquery.mCustomScrollbar.css" />
<link type="text/css" rel="stylesheet" href="/resources/css/common.css" />
<link type="text/css" rel="stylesheet" href="/resources/css/popup.css" />
<link type="text/css" rel="stylesheet" href="/resources/css/jquery-ui.css" />
<link type="text/css" rel="stylesheet" href="/resources/css/style.css" />

<script type="text/javascript" src="/resources/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" src="/resources/js/common.js"></script>
<script type="text/javascript" src="/resources/js/commonUtil.js"></script>
<script type="text/javascript" src="/resources/js/html5shiv.js"></script>
<script type="text/javascript" src="/resources/js/jquery-ui.js"></script>
<script type="text/javascript" src="/resources/js/jquery.form.min.js"></script>
<script type="text/javascript" src="/resources/js/json2.js"></script>
<script type="text/javascript" src="/resources/js/jstorage.js"></script>
<script type="text/javascript" src="/resources/js/popup.js"></script>
<script type="text/javascript" src="/resources/js/validate.js"></script>
<script type="text/javascript" src="/resources/js/dateUtil.js"></script>
<script type="text/javascript" src="/resources/js/validateId.js"></script>
<script type="text/javascript" src="/resources/js/validatePassword.js"></script>
<script>
    hideLoading();
</script>

<b> 로그인 이름 : ${sessionScope.mvo.userName} | 로그인 id : ${sessionScope.mvo.userId}| 로그인 email : ${sessionScope.mvo.email} <br></b>
<p><hr>
<a href="/">메인 로그인페이지 | </a> <a href="/logout.do">로그아웃 |</a> <a href="/w">글쓰기 |</a><a href="/list.do"> 글전체 목록보기 </a> <br>
<p><hr>
<h3><b> 기능 테스트용 </b></h3>
<a href="list.do?pageNo=1"> -> Test 용 : page1 주고 호출</a>

<hr>