package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="skill_set_data")
public class SkillSet {

	@Id
	@Column(name="skill_id",length = 2)
	private int skillId;
	
	@Column(name="skill_type", length =50)
	private String skillType;
	
	@Column(name="min_daily_wage", length=4)
	private int minDailyWage;

	public int getSkillId() {
		return skillId;
	}

	public void setSkillId(int skillId) {
		this.skillId = skillId;
	}

	public String getSkillType() {
		return skillType;
	}

	public void setSkillType(String skillType) {
		this.skillType = skillType;
	}

	public int getMinDailyWage() {
		return minDailyWage;
	}

	public void setMinDailyWage(int minDailyWage) {
		this.minDailyWage = minDailyWage;
	}

	public SkillSet(int skillId, String skillType, int minDailyWage) {
		super();
		this.skillId = skillId;
		this.skillType = skillType;
		this.minDailyWage = minDailyWage;
	}

	public SkillSet() {
		super();
	}

	@Override
	public String toString() {
		return "SkillSet [skillId=" + skillId + ", skillType=" + skillType + ", minDailyWage=" + minDailyWage + "]";
	}
	
	
}
