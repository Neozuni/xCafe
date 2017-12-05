package com.neo.xcafe.model.member;

import java.sql.SQLException;

public interface MemberService {
	public void registerMember(MemberVO mvo) throws SQLException;
	public boolean idcheck(String userId) throws SQLException;
	public MemberVO login(MemberVO mvo) throws SQLException;
}












