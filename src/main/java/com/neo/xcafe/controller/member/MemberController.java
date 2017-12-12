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

	// 회원가입 페이지
	@RequestMapping("/register")
	public String registerView(Model model)throws Exception {
		return "register/register_ajax";
	}

	// 회원가입 결과
	@RequestMapping("register.do")
	public String register(MemberVO mvo)throws Exception {
		memberService.registerMember(mvo);//디비에 인자값으로 바인딩된  vo가 들어갔다.
		return "register/register_result";
	}

	// Ajax idcheck
	@RequestMapping("ajaxIdCheck.do")
	public ModelAndView ajaxIdCheck(String id)throws Exception {
		boolean flag=memberService.idcheck(id);
		return new ModelAndView("JsonView", "flag", flag);
	}

    // 로그인
	@RequestMapping("login.do")
	public ModelAndView login(HttpServletRequest request, HttpServletResponse response,MemberVO mvo)throws Exception{
		String path = "login/login_fail";
		MemberVO rvo = memberService.login(mvo);
		System.out.println("=== Login Controller 동작 === ");
		System.out.println("mvo:: "+mvo);// phone,email 은 null
		System.out.println("rvo:: "+rvo);// null이 없는 꽉찬 vo

		if (rvo != null){
			request.getSession().setAttribute("mvo",rvo);
			//path = "login/login"; // TODO: 잠시 로그인 페이지로 이동시킴
			path = "redirect:/list.do"; // TODO: 로그인 되면 전체 글목록으로 이동
		}
		return new ModelAndView(path);
	}

    // 로그아웃
	@RequestMapping("logout.do")
	public ModelAndView logout(HttpServletRequest request, HttpServletResponse response)throws Exception {
		HttpSession session=request.getSession();

		if(session.getAttribute("mvo") != null) {
			session.invalidate();
			System.out.println("세션 바인딩 해제 로그아웃 처리 완료 ");
		}
		return new ModelAndView("login/login");
	}
}












