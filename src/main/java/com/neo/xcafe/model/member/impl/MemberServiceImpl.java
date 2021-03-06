package com.neo.xcafe.model.member.impl;

import com.neo.xcafe.model.member.MemberDao;
import com.neo.xcafe.model.member.MemberService;
import com.neo.xcafe.model.member.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class MemberServiceImpl implements MemberService{

	@Autowired
	private MemberDao memberDao;
	
	@Override
	public void registerMember(MemberVO mvo) throws SQLException {
		memberDao.registerMember(mvo);
		
	}

	@Override
	public boolean idcheck(String userId) throws SQLException {
		boolean result = false;
		
		if(memberDao.idcheck(userId)!=null) result = true;
		return result;
	}

	@Override
	public MemberVO login(MemberVO mvo) throws SQLException {
		return memberDao.login(mvo);
	}
}

