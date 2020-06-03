package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Labourer;

public interface LabourerDAO extends JpaRepository<Labourer, Integer>
{

}
