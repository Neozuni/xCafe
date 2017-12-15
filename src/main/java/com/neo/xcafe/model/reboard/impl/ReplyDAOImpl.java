package com.neo.xcafe.model.reboard.impl;

import com.neo.xcafe.model.reboard.ReplyDAO;
import com.neo.xcafe.model.reboard.ReplyVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ReplyDAOImpl implements ReplyDAO{
    //@Inject
    @Autowired
    SqlSession sqlSession;

    //댓글목록
    @Override
    public List<ReplyVO> list(Integer bno) {
        return sqlSession.selectList("reply.listReply",bno);
    }

    //댓글작성
    @Override
    public void create(ReplyVO vo) {
        sqlSession.insert("reply.insertReply",vo);
    }

    //댓글수정
    @Override
    public void update(ReplyVO vo) {
    }

    @Override
    public void delete(Integer rno) {
    }
}
