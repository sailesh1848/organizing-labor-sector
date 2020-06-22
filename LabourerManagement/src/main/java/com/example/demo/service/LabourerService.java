package com.example.demo.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Labourer;

@Service
public interface LabourerService 
{
	public long getLabourerCount();
	
	public long getActiveLabourerCount();
	
	public long getInActiveLabourerCount();
	
	public Labourer createLabourer(Labourer theLabourer);
	
	public List<Labourer> getLabourers();
	
	public Labourer editLabourer(Labourer labourer);
	
	public Labourer getLabourerById(int labourerId);
	
	public void deleteLabourer(int labourerId);
	
	public void validateData(String fieldValue, String regex,String fieldName);
}
