package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.entity.SkillSet;


@Service
public interface SkillService {
	
	public SkillSet addSkill(SkillSet skill);
}
