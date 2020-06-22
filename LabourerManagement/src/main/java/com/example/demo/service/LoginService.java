package com.example.demo.service;

import org.springframework.stereotype.Service;
import com.example.demo.entity.Login;


@Service
public interface LoginService {
	
	public Login getById(String id);
	
	public Login addCred(Login log); 
		

}
