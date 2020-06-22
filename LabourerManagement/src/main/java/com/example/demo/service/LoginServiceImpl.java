package com.example.demo.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dao.LoginDao;
import com.example.demo.entity.Login;

@Service
public class LoginServiceImpl implements LoginService{
	
	@Autowired
	LoginDao lDao;

	@Override
	public Login getById(String id) {

		Optional<Login> lgg = lDao.findById(id);
		
		Login result = null;
		
		if(lgg.isPresent())
		{
			result = lgg.get();
		}
		
		return result;
	}

	@Override
	public Login addCred(Login log) {
		
		return lDao.save(log);
	}

}
