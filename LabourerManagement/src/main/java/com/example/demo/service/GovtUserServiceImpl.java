package com.example.demo.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.GovtUserDao;
import com.example.demo.entity.GovtUser;
import com.example.demo.exception.GovtUserDataInvalidException;

@Service
public class GovtUserServiceImpl implements GovtUserService
{
	@Autowired
	private GovtUserDao govtUserDao;

	@Override
	public long getGovtUserCount() 
	{
		return govtUserDao.count();
	}

	@Override
	public long getActiveGovtUserCount() 
	{
		return govtUserDao.countByActiveStatus("Active");
	}

	@Override
	public long getInActiveGovtUserCount() 
	{
		return govtUserDao.countByActiveStatus("Inactive");
	}

	@Override
	public GovtUser createGovtUser(GovtUser govtUser) 
	{
		String pinCode = ""+govtUser.getPinCode();
		String regex1 = "^[1-9][0-9]{5}$";
		validateData(pinCode, regex1, "pinCode");
		
		String phoneNum = ""+govtUser.getPhoneNum();
		String regex2 = "[6789]{1}[0-9]{9}";
		validateData(phoneNum, regex2, "phoneNum");
		
		return govtUserDao.save(govtUser);
	}

	@Override
	public void validateData(String fieldValue, String regex, String fieldName) 
	{
		Pattern pattern = Pattern.compile(regex);
		Matcher  matcher = pattern.matcher(fieldValue); 
		
		if(!matcher.matches())
		{
			throw new GovtUserDataInvalidException("Check the GovtUser Field: "+fieldName);
		}
	}

}
