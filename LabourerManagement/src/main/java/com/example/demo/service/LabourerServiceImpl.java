package com.example.demo.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.LabourerDao;
import com.example.demo.entity.Labourer;
import com.example.demo.exception.EmployerDataInvalidException;

@Service
public class LabourerServiceImpl implements LabourerService
{
	@Autowired
	private LabourerDao labourerDao;

	@Override
	public long getLabourerCount() 
	{
		return labourerDao.count();
	}

	@Override
	public long getActiveLabourerCount() 
	{
		return labourerDao.countByActiveStatus("Active");
	}

	@Override
	public long getInActiveLabourerCount() 
	{
		return labourerDao.countByActiveStatus("Inactive");
	}

	@Override
	public Labourer createLabourer(Labourer theLabourer) 
	{
		String pinCode = ""+theLabourer.getPermanent_address_pin_code();
		String regex1 = "^[1-9][0-9]{5}$";
		validateData(pinCode, regex1, "pinCode");
		
		String aadhaar_no = ""+theLabourer.getAadhaar_no();
		String regex2 = "^[1-9][0-9]{11}$";
		validateData(aadhaar_no, regex2, "aadhaar_no");
		
		String phoneNum = ""+theLabourer.getPhoneNum();
		String regex3 = "[6789]{1}[0-9]{9}";
		validateData(phoneNum, regex3, "phoneNum");
		
		return labourerDao.save(theLabourer);
	}

	
	@Override
	public void validateData(String fieldValue, String regex, String fieldName) 
	{
		Pattern pattern = Pattern.compile(regex);
		Matcher  matcher = pattern.matcher(fieldValue); 
		
		if(!matcher.matches())
		{
			throw new EmployerDataInvalidException("Check the Labourer Field: "+fieldName);
		}
	}
	
}
