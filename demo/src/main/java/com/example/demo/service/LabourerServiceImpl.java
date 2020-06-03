package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dao.LabourerDAO;
import com.example.demo.entity.Labourer;

@Service
public class LabourerServiceImpl implements LabourerService
{
	@Autowired
	private LabourerDAO labourerDAO;
	
	@Override
	public void save(Labourer theLabourer) 
	{
		labourerDAO.save(theLabourer);
	}

	@Override
	public List<Labourer> getLabourers() 
	{
		return labourerDAO.findAll();
	}

	@Override
	public Labourer getLabourer(int labourerId) 
	{
		Optional<Labourer> result = labourerDAO.findById(labourerId);
		
		Labourer theLabourer = null;
		
		if(result.isPresent())
		{
			theLabourer = result.get();
		}
		
		return theLabourer;
	}

	@Override
	public void deleteLabourer(int labourerId) 
	{
		labourerDAO.deleteById(labourerId);
	}

}
