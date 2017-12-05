package com.neo.xcafe.model.member.impl;


import com.neo.xcafe.model.member.MemberDao;
import com.neo.xcafe.model.member.MemberVO;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;

@Repository
public class MemberDaoImpl implements MemberDao{

	@Autowired
	private SqlSession sqlSession;


	@Override
	public void registerMember(MemberVO mvo) throws SQLException {
		sqlSession.insert("memberMapper.registerMember",mvo);
	}

	@Override
	public Object idcheck(String id) throws SQLException {		
		return sqlSession.selectOne("memberMapper.idcheck",id);
	}

	@Override
	public MemberVO login(MemberVO mvo) throws SQLException {
		return sqlSession.selectOne("memberMapper.login",mvo);

	}
}
