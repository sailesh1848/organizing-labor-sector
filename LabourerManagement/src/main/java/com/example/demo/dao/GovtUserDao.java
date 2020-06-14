package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.GovtUser;

public interface GovtUserDao extends JpaRepository<GovtUser, Integer>
{
	public long countByActiveStatus(String activeStatus);
}
