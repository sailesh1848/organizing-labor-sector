package com.example.demo.service;

import org.springframework.stereotype.Service;
import com.example.demo.entity.Labourer;

@Service
public interface LabourerService 
{
	public long getLabourerCount();
	
	public long getActiveLabourerCount();
	
	public long getInActiveLabourerCount();
	
	public Labourer createLabourer(Labourer theLabourer);
	
	public void validateData(String fieldValue, String regex,String fieldName);
}
