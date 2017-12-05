package com.neo.xcafe.model.board;

import com.neo.xcafe.model.member.MemberVO;

public class BoardVO {
    private int id; // 글번호
    private String createDate; // 글생성일
    private String title;
    private String content;
    private Boolean state; // 글삭제하면 상태변경후 표시하지 않음
    private MemberVO memberVO;

    public BoardVO() {
    }

    public BoardVO(int id, String createDate, String title, String content, MemberVO memberVO) {
        this.id = id;
        this.createDate = createDate;
        this.title = title;
        this.content = content;
        this.memberVO = memberVO;
    }

    public BoardVO(int id, String createDate, String title, String content, Boolean state, MemberVO memberVO) {
        this.id = id;
        this.createDate = createDate;
        this.title = title;
        this.content = content;
        this.state = state;
        this.memberVO = memberVO;
    }

    public BoardVO(int id, String createDate, String title, String content, Boolean state) {
        this.id = id;
        this.createDate = createDate;
        this.title = title;
        this.content = content;
        this.state = state;
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

    public MemberVO getMemberVO() {
        return memberVO;
    }

    public void setMemberVO(MemberVO memberVO) {
        this.memberVO = memberVO;
    }

    @Override
    public String toString() {
        return "BoardVO{" +
                "id=" + id +
                ", createDate='" + createDate + '\'' +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", state=" + state +
                ", memberVO=" + memberVO +
                '}';
    }
}
