package com.neo.xcafe.controller.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class LoginController {

    @RequestMapping
    public String loginPage(){

        return "login/login";
    }
}
