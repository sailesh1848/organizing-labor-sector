package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.SkillDao;
import com.example.demo.entity.SkillSet;



@Service
public class SkillServiceImpl implements SkillService{
	
	@Autowired
	SkillDao sDao;

	@Override
	public SkillSet addSkill(SkillSet skill) {
		return sDao.save(skill);
	}
	
	

}
