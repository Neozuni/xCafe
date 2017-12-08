package com.neo.xcafe.model.board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardDao boardDao;

    //글쓰기
    public void write(BoardVO bvo)throws SQLException{
        System.out.println("==== BoardService ====");
        System.out.println("Brfore BVO ::" +bvo.getId()); //0
        boardDao.write(bvo); // select key가 돌아서 시퀀스에 vo 주입
        System.out.println("After BVO ::" +bvo.getId()); // 3

        String date = boardDao.selectByNoForDate(bvo.getId());//3
        //받아온 날짜를 bvo 에 세팅하기
        bvo.setCreateDate(date);
    }

    public BoardVO showContent(String id) throws SQLException{
        return boardDao.showContent(id);
    }

    // #0012 : BoardList & Paging
    //getBaordList
    //특정한 페이지를 클릭하지 않고 바로 최신페이지로 들어가기 적용함
    public List<BoardVO> getBoardList(String id)throws SQLException{

        if(id==null ||id=="") { //특정한 페이지를 클릭하지 않고 바로 최신 페이지로 들어가는 경우 
            id="1";
            System.out.println("Boardservice run.. id=: "+id);
        }
        return boardDao.getBoardList(id);
    }

    // #0016 : 게시글 삭제
    public void deleteBoard(String id)throws SQLException{
        boardDao.deleteBoard(id);
    }

//        if(pageNo==null || pageNo=="") pageNo="1";
//
//        //@@@ 페이징 처리시 수정되어야 하는 부분
//        List<BoardVO> list = boardDao.getBoardList(pageNo);
//        int totalCount = boardDao.totalCount();
//
//        PagingBean paging = new PagingBean(totalCount, Integer.parseInt(pageNo));
//        ListVO lvo = new ListVO(list,paging);

//        return lvo;


}
