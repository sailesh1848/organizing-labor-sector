package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ContractDao;
import com.example.demo.dao.SkillDao;
import com.example.demo.entity.LabourerContract;
import com.example.demo.entity.SkillSet;

@Service
public class ContractServiceImpl implements ContractService {
	
	@Autowired 
	ContractDao cDao;
	
	@Autowired
	SkillDao sDao;

	@Override
	public boolean validateDate(LabourerContract empContract){
		if (empContract.getEmploymentStartDate()!=null && empContract.getEmploymentEndDate()!=null && empContract.getEmploymentEndDate().after(empContract.getEmploymentStartDate()))
		 {
			System.out.println("date sahi h");
			 return true;
		 }
		System.out.println("date me lafda");
		return false;
	}

	
	@Override
	public boolean validateWage(LabourerContract empContract){
		 Optional<SkillSet> result1 = sDao.findById(empContract.getSkillset1());
			
			SkillSet skill1 = null;
		 
		 if(result1.isPresent())
			{
			 skill1=result1.get();
			 
			 if(skill1.getMinDailyWage() <= empContract.getDailyWageSkillset1()) {
				 return true;
			 }
			}
		 return false;
	}

	
	@Override
	public SkillSet viewSkillById(int id) {
     Optional<SkillSet> result = sDao.findById(id);
		
		SkillSet skill = null;
		
		if(result.isPresent())
		{
			skill = result.get();
		}
		
		return skill;	
	}
	
	
	@Override
	public LabourerContract addContract(LabourerContract empContract) {
		LabourerContract contract = new LabourerContract();
		contract.setEmployerId(empContract.getEmployerId());
		contract.setEmploymentStartDate(empContract.getEmploymentStartDate());
		contract.setEmploymentEndDate(empContract.getEmploymentEndDate());
		contract.setEmploymentCity(empContract.getEmploymentCity());
		contract.setEmploymentState(empContract.getEmploymentState());
		contract.setTotalNoOfLabourerNeeded(empContract.getTotalNoOfLabourerNeeded());
		contract.setSkillset1(empContract.getSkillset1());
		
		 Optional<SkillSet> result1 = sDao.findById(empContract.getSkillset1());
			
			SkillSet skill1 = null;
		 
		 if(result1.isPresent())
			{
			 skill1=result1.get();
			 contract.setMinDailyWageSkillset1(skill1.getMinDailyWage());
			 
			}
		 
		 contract.setLabourerNeededSkillset1(empContract.getLabourerNeededSkillset1());
		 contract.setDailyWageSkillset1(empContract.getDailyWageSkillset1());


		 
		 
			/*============================================================*/ 

		 contract.setSkillset2(empContract.getSkillset2());
			
		 Optional<SkillSet> result2 = sDao.findById(empContract.getSkillset2());
			
			SkillSet skill2 = null;
		 
		 if(result2.isPresent())
			{
			 skill2=result2.get();
			 contract.setMinDailyWageSkillset2(skill2.getMinDailyWage());
			}
		 
		 contract.setLabourerNeededSkillset2(empContract.getLabourerNeededSkillset2());
		 contract.setDailyWageSkillset2(empContract.getDailyWageSkillset2());
		 
		/*============================================================*/ 
		 
		 
		 contract.setSkillset3(empContract.getSkillset3());
			
		 Optional<SkillSet> result3 = sDao.findById(empContract.getSkillset3());
			
			SkillSet skill3 = null;
		 
		 if(result3.isPresent())
			{
			 skill3=result3.get();
			 contract.setMinDailyWageSkillset3(skill3.getMinDailyWage());
			}
		 
		 contract.setLabourerNeededSkillset3(empContract.getLabourerNeededSkillset3());
		 contract.setDailyWageSkillset3(empContract.getDailyWageSkillset3());
		 
		 contract.setMedicalInsuranceCover(empContract.getMedicalInsuranceCover());
		 contract.setStatus("Pending");
		 
			
			return cDao.save(contract);
	}


	@Override
	public int fetchAllPending() {
		System.out.println("in service pending wala");
		List<LabourerContract> list = new ArrayList<LabourerContract>(); 
		List<LabourerContract> listPending = new ArrayList<LabourerContract>(); 

		list = cDao.findAll();
		
		/*for(int i=0; i<list.size(); i++) {
			if(list.get(i).getStatus().equals("Pending")) {
				list.remove(i);
			}
		}*/
		//System.out.println(list);
		//for(EmploymentContract contract: list) {
			//System.out.println(contract);
		//}
		for(LabourerContract contract : list) {
			if(contract.getStatus().equals("Pending")) {
				listPending.add(contract);
			}
		}
		
		return listPending.size();
	}
	
	@Override
	public List<LabourerContract> fetchAll() {
		return cDao.findAll();
	}



	@Override
	public LabourerContract viewById(int id) {
		 Optional<LabourerContract> result = cDao.findById(id);
			
			LabourerContract contract = null;
			
			if(result.isPresent())
			{
				contract = result.get();
			}
			
			return contract;	
	}


	@Override
	public void deleteLabourerContractById(int id) 
	{
		cDao.deleteById(id);
	}


	@Override
	public long getContractCount() 
	{
		return cDao.count();
	}


	@Override
	public LabourerContract updateConract(LabourerContract labourerContract) 
	{
		labourerContract.setStatus("Approved");
		return cDao.save(labourerContract);
	}

	



}
