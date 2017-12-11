package com.neo.xcafe.controller.board;

import com.neo.xcafe.model.board.BoardService;
import com.neo.xcafe.model.board.BoardVO;
import com.neo.xcafe.model.board.ListVO;
import com.neo.xcafe.model.member.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.util.List;

@Controller
public class BoardController {

    @Autowired
    private BoardService boardService;

    @RequestMapping("w")
    public String w(){

        return "board/write";
    }

    @RequestMapping("l")
    public String l(){

        return "board/list";
    }

//    @RequestMapping("/write")
//    public String write(HttpServletRequest request,HttpServletResponse response, HttpSession session,BoardVO bvo)throws Exception {
////        MemberVO mvo = (MemberVO) session.getAttribute("mvo");
////        bvo.setMemberVO(mvo);// bvo & mvo hasing ok
////        boardService.write(bvo);//create date
//        return "board/write";
//
//                //new ModelAndView("board/write", "bvo", bvo);
//    }

    // 글쓰기 :: 지금은 기능 사용하지 않음 이후 로그인 여부 체크후 글쓰기로 이동
    @RequestMapping("write.do")
    public ModelAndView write(HttpServletRequest request, HttpServletResponse response, HttpSession session, BoardVO bvo) throws Exception {
        MemberVO mvo = (MemberVO)session.getAttribute("mvo");
        System.out.println(" === Board Controller === ");
        System.out.println(" --- Write 동작 --- ");
        System.out.println("BoardController 동작시 BVO : "+bvo);
        System.out.println("BoardController 동작시 MVO : "+mvo);
        if (mvo == null) { // 로그인 상태가 아님
            System.out.println("로그인 상태가 아닙니다 로그인페이지로 이동합니다");
            return new ModelAndView("redirect:/");//로그인페이지로 보냄
            //return "login/login";
        }

        //로그인상태 라면 ...


        bvo.setMemberVO(mvo);// bvo & mvo hasing ok
        System.out.println("bvo & mvo hasing "+bvo);
        boardService.write(bvo);//create date
        System.out.println("BoardController 수행완료 동작시 BVO : "+bvo);
        System.out.println("BoardController 수행완료 동작시 MVO : "+mvo);
        //return new ModelAndView("board/list.do", "bvo", bvo);
        return new ModelAndView("redirect:/list.do");
    }

    @RequestMapping("showContent.do")
    public ModelAndView showContent(HttpServletRequest request, HttpServletResponse response,String id)
            throws Exception{
        //로그인한 사람만 상세글 정보를 볼수있는 권한을 부여한다.
        MemberVO mvo = (MemberVO)request.getSession().getAttribute("mvo");
        if(mvo==null) { //로그인 하지 않았다.
            return new ModelAndView("redirect:/index.jsp");
        }

        // #0017 : 조회수 증가로직
        //조회수 증가 로직을 추가
        boardService.updateCount(id);

        BoardVO bvo=boardService.showContent(id);
        return new ModelAndView("board/show_content", "bvo",bvo);
    }

    // #0012 : BoardList & Paging
    // #0018 : PagingBean 추가로 수정 id -> lvo & List<BoardVO> -> ListVO
    @RequestMapping("list.do")
    public ModelAndView list(HttpServletRequest request, HttpServletResponse response,String pageNo) throws Exception{
        System.out.println("BoardController List.do 동작 pageno확인 : "+pageNo);
        ListVO lvo = boardService.getBoardList(pageNo);
        System.out.println("BoardController List.do 동작 lvo에 pageno 담음 : "+pageNo);
        return new ModelAndView("board/list","lvo",lvo);
    }

    // #0016 : 게시글 삭제
    // #0018 : PagingBean 추가로 수정 id -> lvo
    @RequestMapping("delete.do")
    public ModelAndView deleteBoard(String id)throws SQLException{
        boardService.deleteBoard(id);
        ListVO lvo = boardService.getBoardList("1");
        //return new ModelAndView("board/list","list",list);
        return new ModelAndView("board/list","lvo",lvo);
    }

    // #0017 : 게시글 수정
    // 수정화면으로 이동
    @RequestMapping("updateView.do")
    public ModelAndView updateView(String id)throws SQLException{
        BoardVO bvo = boardService.showContent(id);
        return new ModelAndView("board/update","bvo",bvo);
    }

    // 실질적 정보수정 부분
    @RequestMapping("updateBoard.do")
    public ModelAndView updateBoard(BoardVO pvo)throws SQLException{
        boardService.updateBoard(pvo); // 디비 데이터를 직접수정
        return new ModelAndView("board/show_content","bvo",boardService.showContent(pvo.getId()+""));
        // pvo | boardService.showContent(id)
    }
}

