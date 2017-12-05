package com.neo.xcafe.model.member;

import java.sql.SQLException;

public interface MemberDao {
	public void registerMember(MemberVO mvo) throws SQLException;
	public Object idcheck(String userId) throws SQLException;
	public MemberVO login(MemberVO mvo) throws SQLException;
}










