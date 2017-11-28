package com.neo.xcafe.model.impl;


import com.neo.xcafe.model.MemberDao;
import com.neo.xcafe.model.MemberVO;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;

@Repository
public class MemberDaoImpl implements MemberDao{

	@Autowired
	private SqlSession sqlSession;


	@Override
	public void registerMember(MemberVO vo) throws SQLException {
		sqlSession.insert("memberMapper.registerMember",vo);	
	}

	@Override
	public Object idcheck(String id) throws SQLException {		
		return sqlSession.selectOne("memberMapper.idcheck",id);
	}


}
