package com.example.demo.service;

import com.example.demo.entity.GovtUser;

public interface GovtUserService 
{
	public long getGovtUserCount();
	
	public long getActiveGovtUserCount();
	
	public long getInActiveGovtUserCount();
	
	public GovtUser createGovtUser(GovtUser govtUser);
	
	public void validateData(String fieldValue, String regex,String fieldName);
}
