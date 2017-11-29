package com.neo.xcafe.model.member;

import java.sql.SQLException;

public interface MemberService {
	public void registerMember(MemberVO vo) throws SQLException;
	public boolean idcheck(String userId) throws SQLException;

}












