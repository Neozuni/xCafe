package com.neo.xcafe.controller;

import com.neo.xcafe.model.MemberService;
import com.neo.xcafe.model.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	
	@RequestMapping("register.do")
	public ModelAndView register(MemberVO vo)throws Exception {
		memberService.registerMember(vo);//디비에 인자값으로 바인딩된  vo가 들어갔다.
		return new ModelAndView("redirect:allMember.do");
	}
	
	@RequestMapping("ajaxIdCheck.do")
	public ModelAndView ajaxIdCheck(String userId)throws Exception {
		boolean flag=memberService.idcheck(userId);
		return new ModelAndView("JsonView", "flag", flag);
	}
	

}












