package com.example.demo.service;

import java.util.List;
import com.example.demo.entity.Labourer;

public interface LabourerService 
{
	public void save(Labourer theLabourer);
	
	public List<Labourer> getLabourers();
	
	public Labourer getLabourer(int labourerId);
	
	public void deleteLabourer(int labourerId);

}
