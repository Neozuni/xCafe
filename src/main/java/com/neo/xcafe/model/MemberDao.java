package com.neo.xcafe.model;

import java.sql.SQLException;

public interface MemberDao {
	public void registerMember(MemberVO vo) throws SQLException;
	public Object idcheck(String userId) throws SQLException;
}










