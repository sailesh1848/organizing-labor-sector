package com.example.demo.dao;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Login;


@Repository
@Transactional
public interface LoginDao extends JpaRepository<Login, String> {

}
