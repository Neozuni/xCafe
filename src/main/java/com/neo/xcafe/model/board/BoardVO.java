package com.neo.xcafe.model.board;

import com.neo.xcafe.model.member.MemberVO;

// #0024 : Join 을 통한 DB 호출 글쓰기
// 필드 추가 memberId
// #0026 : updateDate 동작문제 , 글수정삭제 오류 해결
// 필드 추가 updateDate
public class BoardVO {
    private int id; // 글번호
    private String createDate; // 글생성일
    private String updateDate; // 글수정일
    private String title;
    private String content;
    private Boolean state; // 글삭제하면 상태변경후 표시하지 않음
    private int memberId;
    private int count; //조회수
    private MemberVO memberVO;

    public BoardVO() {
    }



    public BoardVO(int id, String createDate,String updateDate,String title, String content, Boolean state,int memberId, MemberVO memberVO) {
        this.updateDate = updateDate;
        this.id = id;
        this.createDate = createDate;
        this.title = title;
        this.content = content;
        this.state = state;
        this.memberVO = memberVO;
        this.memberId = memberId;
    }

    public BoardVO(int id, String createDate, String title, int count,int memberId, MemberVO memberVO) {
        this.id = id;
        this.createDate = createDate;
        this.title = title;
        this.count = count;
        this.memberVO = memberVO;
        this.memberId = memberId;
    }

    public BoardVO(int id, String createDate, String title, String content, int count,int memberId) {
        this.id = id;
        this.createDate = createDate;
        this.title = title;
        this.content = content;
        this.count = count;
        this.memberId = memberId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public MemberVO getMemberVO() {
        return memberVO;
    }

    public void setMemberVO(MemberVO memberVO) {
        this.memberVO = memberVO;
    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }

    public String getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(String updateDate) {
        this.updateDate = updateDate;
    }

    @Override
    public String toString() {
        return "BoardVO{" +
                "id=" + id +
                ", createDate='" + createDate + '\'' +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", state=" + state +
                ", memberId=" + memberId +
                ", count=" + count +
                ", memberVO=" + memberVO +
                '}';
    }
}
