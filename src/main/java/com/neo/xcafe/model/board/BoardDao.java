package com.neo.xcafe.model.board;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import java.sql.SQLException;

@Repository
public class BoardDao {

    @Autowired
    private SqlSession sqlSession;

    public int write(BoardVO bvo)throws SQLException{
        return sqlSession.insert("boardMapper.write",bvo);
    }

    public String selectByNoForDate(int id)throws SQLException{
        return sqlSession.selectOne("boardMapper.selectByNoForDate",id);
    }

    //showContent
    public BoardVO showContent(String no) throws SQLException{
        return sqlSession.selectOne("boardMapper.showContent",no);
    }


}
