package com.neo.xcafe.model.reboard.impl;

import com.neo.xcafe.model.reboard.ReplyDAO;
import com.neo.xcafe.model.reboard.ReplyService;
import com.neo.xcafe.model.reboard.ReplyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReplyServiceImpl implements ReplyService {

    //@Inject
    @Autowired
    ReplyDAO replyDAO;

    //댓글목록
    @Override
    public List<ReplyVO> list(Integer bno) {
        return replyDAO.list(bno);
    }

    //댓글작성
    @Override
    public void create(ReplyVO vo) {
        replyDAO.create(vo);
    }

    //댓글수정
    @Override
    public void update(ReplyVO vo) {
        replyDAO.update(vo);
    }

    //댓글삭제
    @Override
    public void delete(Integer rno) {
        replyDAO.delete(rno);
    }
}
