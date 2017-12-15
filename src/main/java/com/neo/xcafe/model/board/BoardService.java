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
    // #0024 : Join 을 통한 DB 호출 글쓰기
    public void write(BoardVO bvo)throws SQLException{
        System.out.println("==== BoardService ====");
        System.out.println("Brfore BVO ::" +bvo.getId()); //0
        boardDao.write(bvo); // select key가 돌아서 시퀀스에 vo 주입
        System.out.println("After BVO ::" +bvo.getId()); // 3

        // 임시 String id = boardDao.selectByNoForDate(bvo.getId());//3
        String date = boardDao.selectByNoForDate(bvo.getId());//3
        //받아온 날짜를 bvo 에 세팅하기
        bvo.setCreateDate(date);
        // 임시 bvo.setCreateDate(id);
    }

    // #0011 : 글상세보기 수정
    public BoardVO showContent(String id) throws SQLException{
        return boardDao.showContent(id);
    }

    // #0012 : BoardList & Paging
    //getBaordList
    //특정한 페이지를 클릭하지 않고 바로 최신페이지로 들어가기 적용함
    // 페이징 기능추가로 주석처리함
//    public List<BoardVO> getBoardList(String id)throws SQLException{
//
//        if(id==null ||id=="") { //특정한 페이지를 클릭하지 않고 바로 최신 페이지로 들어가는 경우 
//            id="1";
//            System.out.println("Boardservice run.. id=: "+id);
//        }
//        return boardDao.getBoardList(id);
//    }

    // #0016 : 게시글 삭제
    public void deleteBoard(String id)throws SQLException{
        boardDao.deleteBoard(id);
    }

    // #0017 : 카운트 증가
    public void updateCount(String id)throws SQLException{
        boardDao.updateCount(id);
    }

    // #0017 : 게시글 수정
    public void updateBoard(BoardVO vo)throws SQLException{
        System.out.println("BoardService : updateBoard 작동 "+vo);
        boardDao.updateBoard(vo);
    }


    // #0018 : PagingBean 추가 getBoardList 수정
    public ListVO getBoardList(String pageNo)throws SQLException{ //no 특정페이지를 클릭하지 않고 바로 최신페이지로
        System.out.println("BoardService if 전 pageNo = "+pageNo);
        if (pageNo==null || pageNo=="") pageNo="1";
        // -- 페이징 처리되어 변경할 부분

        System.out.println("BoardService if 후 pageNo = "+pageNo);

        List<BoardVO> list = boardDao.getBoardList(pageNo); // 객체를 반환받음
        System.out.println("BoardService list 에 pageNo 객체 반환함  = "+pageNo+" :List = "+list);
        int totalCount = boardDao.totalCount(); // 객체를 반환받음
        System.out.println("BoardService Totalcount 객체에 받음 = "+totalCount);
        PagingBean paging = new PagingBean(totalCount, Integer.parseInt(pageNo));
        ListVO lvo = new ListVO(list,paging); // 특정한 페이지에서 불러오는것
        return lvo;
        // return boardDao.getBoardList(id);
    }

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

