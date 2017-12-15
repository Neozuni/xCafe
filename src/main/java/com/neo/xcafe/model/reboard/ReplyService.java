package com.neo.xcafe.model.reboard;

import java.util.List;
import com.neo.xcafe.model.reboard.ReplyVO;

public interface ReplyService {
    //댓글목록
    public List<ReplyVO>list(Integer bno);

    //댓글입력
    public void create(ReplyVO vo);

    //댓글수정
    public void update(ReplyVO vo);

    //댓글삭제
    public void delete(Integer rno);
}
