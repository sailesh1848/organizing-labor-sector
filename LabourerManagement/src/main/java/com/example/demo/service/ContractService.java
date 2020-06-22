package com.example.demo.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.entity.LabourerContract;
import com.example.demo.entity.SkillSet;

@Service
public interface ContractService {
	
	public boolean validateDate(LabourerContract empContract);
	
	public boolean validateWage(LabourerContract empContract);

	public LabourerContract addContract(LabourerContract empContract);
	
	public SkillSet viewSkillById(int id);
	
	public List<LabourerContract> fetchAll();
	
	public int fetchAllPending();

	public long getContractCount();
	
	public LabourerContract viewById(int id);
	
	public void deleteLabourerContractById(int id);
	
	public LabourerContract updateConract(LabourerContract labourerContract);

}
