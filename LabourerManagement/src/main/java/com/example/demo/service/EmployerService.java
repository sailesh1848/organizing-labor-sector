package com.example.demo.service;

import java.util.List;
import com.example.demo.entity.Employer;

public interface EmployerService 
{
	public long getEmployerCount();
	
	public long getPendingEmployers();
	
	public long getApprovedEmployers();
	
	public Employer createEmployer(Employer theEmployee);
	
	public List<Employer> getEmployers();

	public void validateData(String fieldValue, String regex,String fieldName);
	
	public Employer editEmployer(Employer employer);
	
	public void deleteEmployer(int employerId);

}
