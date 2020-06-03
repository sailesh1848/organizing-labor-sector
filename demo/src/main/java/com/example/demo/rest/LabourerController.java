package com.example.demo.rest;

import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Labourer;
import com.example.demo.exception.LabourerDataInvalidException;
import com.example.demo.exception.LabourerNotFoundException;
import com.example.demo.service.LabourerService;

@RestController
@RequestMapping("/api")
public class LabourerController 
{
	@Autowired
	private LabourerService labourerService;
	
	@PostMapping("/labourers")
	public Labourer addLabourer(@Valid @RequestBody Labourer theLabourer, BindingResult theBindingResult)
	{
		
		if(theBindingResult.hasErrors())
		{
			ObjectError error = theBindingResult.getFieldError();
			String fieldErrors = ((FieldError) error).getField(); 
			throw new LabourerDataInvalidException("Check the Labourer Field: "+fieldErrors);
		}
		else
		{
			theLabourer.setId(0);
			
			theLabourer.setCreationDate(new Date());
			
			theLabourer.setLastModifiedDate(new Date());
			
			labourerService.save(theLabourer);
			
			return theLabourer;
		}
	}
	
	@GetMapping("/labourers")
	public List<Labourer> getLabourers()
	{
		return labourerService.getLabourers(); 
	}
	
	@GetMapping("/labourers/{labourerId}")
	public Labourer getLabourer(@PathVariable int labourerId)
	{
		List<Labourer> labourerList = labourerService.getLabourers();
		
		if(labourerId >= labourerList.size() || (labourerId < 0))
		{
			throw new LabourerNotFoundException("Labourer with Id:"+labourerId+" not found");
		}
		return labourerService.getLabourer(labourerId);
	}
	
	@PutMapping("/labourers")
	public Labourer updateLabourer(@RequestBody Labourer theLabourer)
	{
		theLabourer.setLastModifiedDate(new Date());
		
		labourerService.save(theLabourer);
		
		return theLabourer;
	}
	
	@DeleteMapping("/labourers/{labourerId}")
	public void deleteLabourer(@PathVariable int labourerId)
	{
		List<Labourer> labourerList = labourerService.getLabourers();
		
		if(labourerId >= labourerList.size() || (labourerId < 0))
		{
			throw new LabourerNotFoundException("Labourer with Id:"+labourerId+" not found");
		}
		
		labourerService.deleteLabourer(labourerId);
	}
}

