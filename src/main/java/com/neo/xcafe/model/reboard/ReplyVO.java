package com.neo.xcafe.model.reboard;

import com.neo.xcafe.model.board.BoardVO;
import com.neo.xcafe.model.member.MemberVO;

import java.util.Date;

// #0028 : Reply 기능 만들기
public class ReplyVO {
    private int id; // 댓글번호
    private Date createDate; // 댓글작성일
    private Date updateDate; // 댓글수정일
    private String content; // 댓글내용
    private boolean state; // 댓글상태
    private int memberId; // 댓글작성자 id
    private int boardId; // 댓글 연결 게시글번호
    private String userName; // 댓글 작성자 이름
    private MemberVO memberVO;
    private BoardVO boardVO;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }

    public int getBoardId() {
        return boardId;
    }

    public void setBoardId(int boardId) {
        this.boardId = boardId;
    }

    public MemberVO getMemberVO() {
        return memberVO;
    }

    public void setMemberVO(MemberVO memberVO) {
        this.memberVO = memberVO;
    }

    public BoardVO getBoardVO() {
        return boardVO;
    }

    public void setBoardVO(BoardVO boardVO) {
        this.boardVO = boardVO;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "ReplyVO{" +
                "id=" + id +
                ", createDate=" + createDate +
                ", updateDate=" + updateDate +
                ", content='" + content + '\'' +
                ", state=" + state +
                ", memberId=" + memberId +
                ", boardId=" + boardId +
                ", userName='" + userName + '\'' +
                ", memberVO=" + memberVO +
                ", boardVO=" + boardVO +
                '}';
    }
}
