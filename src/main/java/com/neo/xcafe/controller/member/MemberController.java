package com.neo.xcafe.controller.member;

import com.neo.xcafe.model.member.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/register")
public class MemberController {
	
	@Autowired
	private MemberService memberService;

	@RequestMapping
	public String registerView(Model model)throws Exception {
		return "register/register";
	}

}












