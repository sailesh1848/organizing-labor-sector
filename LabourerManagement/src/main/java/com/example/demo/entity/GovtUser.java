package com.example.demo.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name="govtUser_details")
public class GovtUser 
{
	@Id
	@Column(name="govtuser_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int govtUserId;
	
	@NotNull
	@Column(name="first_name", length=50)
	@Pattern(regexp = "[a-zA-Z ]{1,50}")
	private String firstName;
	
	@NotNull
	@Column(name="last_name", length=50)
	@Pattern(regexp = "[a-zA-Z ]{1,50}")
	private String lastName;
	
	@NotNull
	@Column(name="office_name", length=50)
	@Pattern(regexp = "[a-zA-Z ]{1,50}")
	private String officeName;
	
	@NotNull
	@Column(name="office_address", length=100)
	private String officeAddress;
	
	@NotNull
	@Column(name="city", length=50)
	@Pattern(regexp = "[a-zA-Z ]{1,50}")
	private String city;
	
	@NotNull
	@Column(name="state", length=50)
	@Pattern(regexp = "[a-zA-Z ]{1,50}")
	private String state;
	
	@NotNull
	@Column(name="pincode", length=6)
	private int pinCode;
	
	@NotNull
	@Column(name="phone_num", length=12)
	private long phoneNum;
	
	@Column(name="active_status")
	private String activeStatus;
	
	@Column(name = "creation_date", columnDefinition = "TIMESTAMP", updatable=false)
	@CreationTimestamp
	private Date creationDate;
	
	@Column(name = "last_modified_date", columnDefinition = "TIMESTAMP")
	@UpdateTimestamp
	private Date lastActionDate;

	public GovtUser()
	{
		super();
	}

	public GovtUser(String firstName, String lastName, String officeName, String officeAddress, String city,
			String state, int pinCode, long phoneNum, String activeStatus, Date creationDate, Date lastActionDate) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.officeName = officeName;
		this.officeAddress = officeAddress;
		this.city = city;
		this.state = state;
		this.pinCode = pinCode;
		this.phoneNum = phoneNum;
		this.activeStatus = activeStatus;
		this.creationDate = creationDate;
		this.lastActionDate = lastActionDate;
	}

	public int getGovtUserId() 
	{
		return govtUserId;
	}

	public void setGovtUserId(int govtUserId) 
	{
		this.govtUserId = govtUserId;
	}

	public String getFirstName() 
	{
		return firstName;
	}

	public void setFirstName(String firstName) 
	{
		this.firstName = firstName;
	}

	public String getLastName() 
	{
		return lastName;
	}

	public void setLastName(String lastName) 
	{
		this.lastName = lastName;
	}

	public String getOfficeName() 
	{
		return officeName;
	}

	public void setOfficeName(String officeName) 
	{
		this.officeName = officeName;
	}

	public String getOfficeAddress() 
	{
		return officeAddress;
	}

	public void setOfficeAddress(String officeAddress) 
	{
		this.officeAddress = officeAddress;
	}

	public String getCity() 
	{
		return city;
	}

	public void setCity(String city) 
	{
		this.city = city;
	}

	public String getState() 
	{
		return state;
	}

	public void setState(String state) 
	{
		this.state = state;
	}

	public int getPinCode() 
	{
		return pinCode;
	}

	public void setPinCode(int pinCode) 
	{
		this.pinCode = pinCode;
	}

	public long getPhoneNum() 
	{
		return phoneNum;
	}

	public void setPhoneNum(long phoneNum) 
	{
		this.phoneNum = phoneNum;
	}

	public String isActiveStatus() 
	{
		return activeStatus;
	}

	public void setActiveStatus(String activeStatus) 
	{
		this.activeStatus = activeStatus;
	}

	public Date getCreationDate() 
	{
		return creationDate;
	}

	public void setCreationDate(Date creationDate) 
	{
		this.creationDate = creationDate;
	}

	public Date getLastActionDate() 
	{
		return lastActionDate;
	}

	public void setLastActionDate(Date lastActionDate) 
	{
		this.lastActionDate = lastActionDate;
	}

	@Override
	public String toString() {
		return "GovtUser [govtUserId=" + govtUserId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", officeName=" + officeName + ", officeAddress=" + officeAddress + ", city=" + city + ", state="
				+ state + ", pinCode=" + pinCode + ", phoneNum=" + phoneNum + ", activeStatus=" + activeStatus
				+ ", creationDate=" + creationDate + ", lastActionDate=" + lastActionDate + "]";
	}
	
	
}
