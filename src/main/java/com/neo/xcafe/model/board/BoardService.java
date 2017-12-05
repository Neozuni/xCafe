package com.neo.xcafe.model.board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

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

    public BoardVO showContent(String no) throws SQLException{
        return boardDao.showContent(no);
    }

}
