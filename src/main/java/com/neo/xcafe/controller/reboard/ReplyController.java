package com.neo.xcafe.controller.reboard;

import com.neo.xcafe.model.reboard.ReplyService;
import com.neo.xcafe.model.reboard.ReplyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.List;


// #0028 : Reply 기능 만들기

@RestController
@RequestMapping("/reply/*")
public class ReplyController {

    //@Inject
    @Autowired
    ReplyService replyService;

    // 댓글 입력
    @RequestMapping("insert.do")
    public void insert(@ModelAttribute ReplyVO vo, HttpSession session){
        String userId = (String) session.getAttribute("userId");
        vo.setMemberId((Integer.parseInt(userId)));
        replyService.create(vo);
    }

    // 댓글 목록 (@Controller 방식 : view 화면을 리턴)
    @RequestMapping("list.do")
    public ModelAndView list(@RequestParam int bno, ModelAndView mav){
        List<ReplyVO> list = replyService.list(bno);

        //뷰이름 지정
        mav.setViewName("board/replyList");

        //뷰에 전달할 데이터 지정
        mav.addObject("list",list);

        //replyList.jsp 로 포워딩

        return mav;
    }

    // 댓글 목록 (@RestController Json 방식으로 처리 : 데이터를 리턴
    @RequestMapping("ListJason.do")
    @ResponseBody // 리턴 데이터를 json으로 변환 (생략가능)
    public List<ReplyVO> listJson(@RequestParam int bno){
        List<ReplyVO> list = replyService.list(bno);
        return list;
    }


}
