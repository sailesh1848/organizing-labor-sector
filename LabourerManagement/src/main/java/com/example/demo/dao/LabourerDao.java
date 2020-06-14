package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Labourer;

public interface LabourerDao extends JpaRepository<Labourer, Integer>
{
	public long countByActiveStatus(String activeStatus);
}
