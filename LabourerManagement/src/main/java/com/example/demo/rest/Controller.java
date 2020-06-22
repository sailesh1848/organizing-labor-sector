package com.example.demo.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.LabourerContract;
import com.example.demo.entity.Login;
import com.example.demo.entity.SkillSet;
import com.example.demo.service.ContractService;
import com.example.demo.service.LoginService;
import com.example.demo.service.SkillService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/LabourMgm")
public class Controller {

	@Autowired
	ContractService cService;

	@Autowired
	SkillService sService;
	
	@Autowired
	LoginService lService;

	@PostMapping(path = "/Contract/", consumes = "application/json")
	public LabourerContract enterContract(@RequestBody LabourerContract empContract) {
		if (cService.validateWage(empContract) && cService.validateDate(empContract)) {
			System.out.println("EmployerContract has a new record");
			return cService.addContract(empContract);
		}
		System.out.println("EmployerContract has no new record");
		return null;
	}

	@GetMapping(path = "/ContractCount/")
	public int getAllPendingContracts() {

		System.out.println("Pending contracts");
		return cService.fetchAllPending();

	}

	@GetMapping(path = "/Contract/{id}")
	public LabourerContract viewContractById(@PathVariable int id) {
		LabourerContract contract = new LabourerContract();
		contract = cService.viewById(id);
		if (contract == null) {
			System.out.println(id + " not found");
			return null;
		}
		System.out.println(id + " found");
		return contract;
	}

	@GetMapping(path = "/Contract/")
	public List<LabourerContract> getAllContracts() {

		return cService.fetchAll();

	}

	@PostMapping(path = "/Skill/", consumes = "application/json")
	public SkillSet enterSkill(@RequestBody SkillSet skill) {

		System.out.println("SkillSet has a new record");
		return sService.addSkill(skill);
	}

	@GetMapping(path = "/Skill/{id}")
	public SkillSet getSkilById(@PathVariable int id) {
		return cService.viewSkillById(id);
	}
	@PutMapping(path = "/Contract/")
	public LabourerContract updateContract(@RequestBody LabourerContract labourerContract)
	{
		return cService.updateConract(labourerContract);
	}
	
	@DeleteMapping(path="/Contract/{id}")
	public void deleteContractById(@PathVariable int id)
	{
		cService.deleteLabourerContractById(id);
	}
	
	@GetMapping(path = "/Login/{id}")
	public Login fetchById(@PathVariable String id){
		
		
		return lService.getById(id);
		
	}
	
	@PostMapping(path = "/Login/", consumes = "application/json")
	public Login enterLogin(@RequestBody Login log) {

			System.out.println("Login has a new record");
			return lService.addCred(log);
	}
}
