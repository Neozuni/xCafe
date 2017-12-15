package com.neo.xcafe.model.reboard;

import java.util.List;

public interface ReplyDAO {
    // 댓글 목록
    public List<ReplyVO> list(Integer bno);
    // 댓글 입력
    public void create(ReplyVO vo);
    // 댓글 수정
    public void update(ReplyVO vo);
    // 댓글 삭제
    public void delete(Integer rno);
}
