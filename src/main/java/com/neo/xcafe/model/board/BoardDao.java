package com.neo.xcafe.model.board;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import java.sql.SQLException;
import java.util.List;

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
    public BoardVO showContent(String id) throws SQLException{
        return sqlSession.selectOne("boardMapper.showContent",id);
    }

    // #0012 : BoardList & Paging
    //GetBoardList
    public List<BoardVO> getBoardList(String id)throws SQLException{
        System.out.println("BoardDao - Query Run");
        return sqlSession.selectList("boardMapper.getBoardList",id);
    }


    // #0016 : 게시글 삭제
    // Delete Board
    public void deleteBoard(String id) throws SQLException{
        sqlSession.delete("boardMapper.deleteBoard", id);
    }

    // #0017 : 게시글 수정 및 카운트 증가
    // 카운트 증가
    public void updateCount(String id)throws SQLException{
        sqlSession.update("boardMapper.updateCount",id);
    }

    // 게시물 수정
    public void updateBoard(BoardVO vo)throws SQLException{
        sqlSession.update("boardMapper.updateBoard",vo);
    }

    // #0018 : PagingBean 추가
    //페이징 처리로 추가
    public int totalCount() throws SQLException {
        return sqlSession.selectOne("boardMapper.totalCount");
    }
}
