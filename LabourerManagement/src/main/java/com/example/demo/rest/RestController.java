package com.example.demo.rest;

import java.util.Date;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.demo.entity.Employer;
import com.example.demo.entity.GovtUser;
import com.example.demo.entity.Labourer;
import com.example.demo.entity.Response;
import com.example.demo.exception.EmployerDataInvalidException;
import com.example.demo.service.ContractService;
import com.example.demo.service.EmployerService;
import com.example.demo.service.GovtUserService;
import com.example.demo.service.LabourerService;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/LabourMgm")
public class RestController {
	@Autowired
	private EmployerService employerService;

	@Autowired
	private LabourerService labourerService;

	@Autowired
	private GovtUserService govtUserService;

	@Autowired
	private ContractService contractService;
	
	Response response = new Response();

	@GetMapping("/dashBoardCounts")
	public Response getDashBoardCounts() {
		long employersCount = employerService.getEmployerCount();

		long employersApprovedCount = employerService.getApprovedEmployers();

		long employersPendingCount = employerService.getPendingEmployers();

		long labourersCount = labourerService.getLabourerCount();

		long labourerActiveCount = labourerService.getActiveLabourerCount();

		long labourerInActiveCount = labourerService.getInActiveLabourerCount();

		long govtUserCount = govtUserService.getGovtUserCount();

		long govtUserActiveCount = govtUserService.getActiveGovtUserCount();

		long govtUserInActiveCount = govtUserService.getInActiveGovtUserCount();
		
		long contractCount = contractService.getContractCount();

		response.setEmployersCount(employersCount);

		response.setApprovedEmployers(employersApprovedCount);

		response.setPendingEmployers(employersPendingCount);

		response.setLabourersCount(labourersCount);

		response.setActiveLabourers(labourerActiveCount);

		response.setInActiveLabourers(labourerInActiveCount);

		response.setGovtUserCount(govtUserCount);

		response.setActiveGovtUsers(govtUserActiveCount);

		response.setInActiveGovtUsers(govtUserInActiveCount);
		
		response.setContractCount(contractCount);

		return response;
	}

	
	
	@PostMapping("/Employer/")
	public Employer createEmployer(@Valid @RequestBody Employer theEmployer, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			ObjectError error = bindingResult.getFieldError();
			String fieldErrors = ((FieldError) error).getField();
			throw new EmployerDataInvalidException("Check the Employer Field: " + fieldErrors);
		} else {
			theEmployer.setEmployerId(0);

			theEmployer.setStatus("Pending");

			employerService.createEmployer(theEmployer);

			return theEmployer;
		}
	}

	@GetMapping("/Employer/")
	public List<Employer> getEmployers() {
		return employerService.getEmployers();
	}

	@GetMapping(path = "/Employer/{employerId}")
	public Employer getEmployerById(@PathVariable int employerId) {
		return employerService.getEmployer(employerId);
	}
	
	@PutMapping(path = "/Employer/")
	public Employer editEmployer(@RequestBody Employer employer) {
		return employerService.editEmployer(employer);
	}
	
	@DeleteMapping(path = "/Employer/{employerId}")
	public void deleteEmployer(@PathVariable int employerId) {
		employerService.deleteEmployer(employerId);
	}
	
	
	
	@PostMapping("/labourers")
	public Labourer addLabourer(@Valid @RequestBody Labourer theLabourer, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			ObjectError error = bindingResult.getFieldError();
			String fieldErrors = ((FieldError) error).getField();
			throw new EmployerDataInvalidException("Check the Labourer Field: " + fieldErrors);
		} else {
			theLabourer.setLabourer_id(0);

			theLabourer.setCreationDate(new Date());

			theLabourer.setLastModifiedDate(new Date());

			theLabourer.setActiveStatus("Active");

			labourerService.createLabourer(theLabourer);

			return theLabourer;

		}
	}
	
	@GetMapping("/labourers")
	public List<Labourer> getLabourers() {
		return labourerService.getLabourers();
	}
	
	@GetMapping("/labourers/{labourerId}")
	public Labourer getLabourer(@PathVariable int labourerId) {
		return labourerService.getLabourerById(labourerId);
	}

	@PutMapping("/labourers")
	public Labourer updateLabourer(@RequestBody Labourer theLabourer) {
		theLabourer.setLastModifiedDate(new Date());

		labourerService.createLabourer(theLabourer);

		return theLabourer;
	}

	@DeleteMapping("/labourers/{labourerId}")
	public void deleteLabourer(@PathVariable int labourerId)
	{	
		labourerService.deleteLabourer(labourerId);
	}

	
	
	@PostMapping("/govtUsers")
	public GovtUser createGovtUser(@Valid @RequestBody GovtUser thegovtUser, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			ObjectError error = bindingResult.getFieldError();
			String fieldErrors = ((FieldError) error).getField();
			throw new EmployerDataInvalidException("Check the GovtUser Field: " + fieldErrors);
		} else {
			thegovtUser.setGovtUserId(0);

			thegovtUser.setActiveStatus("Active");

			govtUserService.createGovtUser(thegovtUser);

			return thegovtUser;
		}
	}

}
