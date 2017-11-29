package com.neo.xcafe.controller.member;

import com.neo.xcafe.model.member.MemberService;
import com.neo.xcafe.model.member.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
public class MemberController {
	
	@Autowired
	private MemberService memberService;

	@RequestMapping("/register")
	public String registerView(Model model)throws Exception {
		return "register/register_ajax";
	}

	@RequestMapping("register.do")
	public String register(MemberVO vo)throws Exception {
		memberService.registerMember(vo);//디비에 인자값으로 바인딩된  vo가 들어갔다.
		return "register/register_result";
	}

	@RequestMapping("ajaxIdCheck.do")
	public ModelAndView ajaxIdCheck(String id)throws Exception {
		boolean flag=memberService.idcheck(id);
		return new ModelAndView("JsonView", "flag", flag);
	}

	@RequestMapping("login.do")
	public ModelAndView login(HttpServletRequest request, HttpServletResponse response,MemberVO pvo)throws Exception{
		String path = "login/login_fail";
		MemberVO rvo = memberService.login(pvo);
		System.out.println("pvo:: "+pvo);// phone,email 은 null
		System.out.println("rvo:: "+rvo);// null이 없는 꽉찬 vo

		if (rvo != null){
			request.getSession().setAttribute("vo",rvo);
			path = "login/login_ok";
		}
		return new ModelAndView(path);
	}

	@RequestMapping("logout.do")
	public ModelAndView logout(HttpServletRequest request, HttpServletResponse response)throws Exception {
		HttpSession session=request.getSession();

		if(session.getAttribute("vo") != null) {
			session.invalidate();
		}
		return new ModelAndView("index");
	}
}












