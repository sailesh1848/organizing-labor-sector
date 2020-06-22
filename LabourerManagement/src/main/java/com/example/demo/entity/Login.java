package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="login_data")
public class Login {
	
	@Id
	@Column(name="user_name",length=50)
	private String userName;
	
	@NotNull
	@Column(name="password", length=50)
	private String password;
	
	@NotNull
	@Column(name="role", length=50)
	private String role;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Login(@NotNull String userName, @NotNull String password, @NotNull String role) {
		super();
		this.userName = userName;
		this.password = password;
		this.role = role;
	}

	public Login() {
		super();
	}

	@Override
	public String toString() {
		return "Login [userName=" + userName + ", password=" + password + ", role=" + role + "]";
	}
	
	
	
	
	

}
