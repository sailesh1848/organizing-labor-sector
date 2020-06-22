package com.example.demo.dao;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.LabourerContract;

@Repository
@Transactional
public interface ContractDao extends JpaRepository<LabourerContract, Integer>
{
	public List<LabourerContract> findByEmploymentEndDateBefore(Date expiryDate);
}
