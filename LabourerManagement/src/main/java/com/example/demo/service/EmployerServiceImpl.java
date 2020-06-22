package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dao.EmployerDao;
import com.example.demo.entity.Employer;
import com.example.demo.exception.EmployerDataInvalidException;
import com.example.demo.exception.EmployerNotFoundException;
import com.example.demo.exception.EmployerTableEmptyException;

@Service
public class EmployerServiceImpl implements EmployerService
{
	@Autowired
	private EmployerDao employerDao;
	
	@Override
	public long getEmployerCount() 
	{
		return employerDao.count();
	}

	@Override
	public long getPendingEmployers() 
	{
		return employerDao.countByStatus("Pending");
	}

	@Override
	public long getApprovedEmployers() 
	{
		return employerDao.countByStatus("Approved");
	}

	@Override
	public Employer createEmployer(Employer theEmployee) 
	{
		String pinCode = ""+theEmployee.getPincode();
		String regex1 = "^[1-9][0-9]{5}$";
		validateData(pinCode, regex1, "pinCode");
		
		String phNo = ""+theEmployee.getPhNo();
		String regex2 = "[6789]{1}[0-9]{9}";
		validateData(phNo, regex2, "phNo");
		
		String businessType = ""+theEmployee.getBusinessType();
		String regex3 = "[0-9]{2}";
		validateData(businessType, regex3, "businessType");
		
		String tanNo = ""+theEmployee.getTanNo();
		String regex4 = "[0-9]{10}";
		validateData(tanNo, regex4, "tanNo");
		
		String regnNo = ""+theEmployee.getRegnNo();
		String regex5 = "[0-9]{10}";
		validateData(regnNo, regex5, "regnNo");
		
		return employerDao.save(theEmployee);
	}

	@Override
	public List<Employer> getEmployers() 
	{
		if(employerDao.findAll() == null)
		{
			throw new EmployerTableEmptyException("Employer Table is Empty...");
		}
		else
		{
			return employerDao.findAll();
		}
	}
	
	@Override
	public void validateData(String fieldValue, String regex, String fieldName) 
	{
		Pattern pattern = Pattern.compile(regex);
		Matcher  matcher = pattern.matcher(fieldValue); 
		
		if(!matcher.matches())
		{
			throw new EmployerDataInvalidException("Check the Employer Field: "+fieldName);
		}
	}

	
	@Override
	public Employer editEmployer(Employer employer) 
	{
		employer.setStatus("Approved");
		
		return employerDao.save(employer);
	}

	
	@Override
	public void deleteEmployer(int employerId) 
	{
		Optional<Employer> result = employerDao.findById(employerId);
		
		if(result.isPresent())
		{
			employerDao.deleteById(employerId);
		}
		else
		{
			throw new EmployerNotFoundException("Employer with Id:"+employerId+" not found");
		}
	}

	@Override
	public Employer getEmployer(int employerId) 
	{
		Optional<Employer> result = employerDao.findById(employerId);
		
		Employer theEmployer = null;
		
		if(result.isPresent())
		{
			theEmployer = result.get();
		}
		else
		{
			throw new EmployerNotFoundException("Employer with Id:"+employerId+" not found");
		}
		
		return theEmployer;
	}
	
}
