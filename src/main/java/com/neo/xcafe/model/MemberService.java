package com.neo.xcafe.model;

import java.sql.SQLException;

public interface MemberService {
	public void registerMember(MemberVO vo) throws SQLException;
	public boolean idcheck(String userId) throws SQLException;

}












