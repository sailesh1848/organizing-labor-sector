package com.example.demo.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="labour_details")
public class Labourer 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="labourer_id")
	private int labourer_id;

	@NotNull
	@Pattern(regexp="^[a-zA-Z ]{3,50}")
	@Column(name="first_name")
	private String first_name;

	@NotNull
	@Pattern(regexp="^[a-zA-Z ]{3,50}")
	@Column(name="last_name")
	private String last_name;
	
	@NotNull
	@Past
	@Column(name="date_of_birth")
	@JsonFormat(pattern="yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date date_of_birth;
	
	@NotNull
	@Column(name="permanent_address")
	private String permanent_address;
	
	@NotNull
	@Pattern(regexp="[a-zA-Z ]{3,50}")
	@Column(name="permanent_address_city")
	private String permanent_address_city;
	
	@NotNull
	@Pattern(regexp="[a-zA-Z ]{3,50}")
	@Column(name="permanent_address_state")
	private String permanent_address_state;
	
	@NotNull
	@Column(name="permanent_address_pin_code")
	private int permanent_address_pin_code;
	
	@NotNull
	@Column(name="adhaar_no")
	private long aadhaar_no;
	
	@NotNull
	@Pattern(regexp="[A-Z]{5}[0-9]{4}[A-Z]{1}")
	@Column(name="pan_no")
	private String pan_no;
	
	@NotNull
	@Column(name="skill_1")
	private int skill_1;
	
	@NotNull
	@Column(name="skill_2")
	private int skill_2;
	
	@NotNull
	@Column(name="skill_3")
	private int skill_3;
	
	@Column(name="active_status")
	private String activeStatus;

	@NotNull
	@Column(name="currently_employed")
	private boolean currentlyEmployed;
	
	@NotNull
	@Column(name="phone_number")
	private long phoneNum;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="creation_date")
	private Date creationDate;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="last_modified_date")
	private Date lastModifiedDate;
	
	public Labourer(String first_name, String last_name, String permanent_address,
			String permanent_address_city, String permanent_address_state, int permanent_address_pinCode,
			long aadhaar_no, String pan_no, int skill_1, int skill_2, int skill_3, String activeStatus,
			boolean currentlyEmployed, long phoneNum, Date creationDate, Date lastModifiedDate, Date date_of_birth) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.date_of_birth = date_of_birth;
		this.permanent_address = permanent_address;
		this.permanent_address_city = permanent_address_city;
		this.permanent_address_state = permanent_address_state;
		this.permanent_address_pin_code = permanent_address_pinCode;
		this.aadhaar_no = aadhaar_no;
		this.pan_no = pan_no;
		this.skill_1 = skill_1;
		this.skill_2 = skill_2;
		this.skill_3 = skill_3;
		this.activeStatus = activeStatus;
		this.currentlyEmployed = currentlyEmployed;
		this.phoneNum = phoneNum;
		this.creationDate = creationDate;
		this.lastModifiedDate = lastModifiedDate;
	}

	public Labourer()
	{
		
	}

	public int getLabourer_id() {
		return labourer_id;
	}

	public void setLabourer_id(int labourer_id) {
		this.labourer_id = labourer_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public Date getDate_of_birth() {
		return date_of_birth;
	}

	public void setDate_of_birth(Date date_of_birth) {
		this.date_of_birth = date_of_birth;
	}

	public String getPermanent_address() {
		return permanent_address;
	}

	public void setPermanent_address(String permanent_address) {
		this.permanent_address = permanent_address;
	}

	public String getPermanent_address_city() {
		return permanent_address_city;
	}

	public void setPermanent_address_city(String permanent_address_city) {
		this.permanent_address_city = permanent_address_city;
	}

	@Override
	public String toString() {
		return "Labourer [labourer_id=" + labourer_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", date_of_birth=" + date_of_birth + ", permanent_address=" + permanent_address
				+ ", permanent_address_city=" + permanent_address_city + ", permanent_address_state="
				+ permanent_address_state + ", permanent_address_pin_code=" + permanent_address_pin_code
				+ ", aadhaar_no=" + aadhaar_no + ", pan_no=" + pan_no + ", skill_1=" + skill_1 + ", skill_2=" + skill_2
				+ ", skill_3=" + skill_3 + ", activeStatus=" + activeStatus + ", currentlyEmployed=" + currentlyEmployed
				+ ", phoneNum=" + phoneNum + ", creationDate=" + creationDate + ", lastModifiedDate=" + lastModifiedDate
				+ "]";
	}

	public String getPermanent_address_state() {
		return permanent_address_state;
	}

	public void setPermanent_address_state(String permanent_address_state) {
		this.permanent_address_state = permanent_address_state;
	}

	public int getPermanent_address_pin_code() {
		return permanent_address_pin_code;
	}

	public void setPermanent_address_pin_code(int permanent_address_pin_code) {
		this.permanent_address_pin_code = permanent_address_pin_code;
	}

	public long getAadhaar_no() {
		return aadhaar_no;
	}

	public void setAadhaar_no(long aadhaar_no) {
		this.aadhaar_no = aadhaar_no;
	}

	public String getPan_no() {
		return pan_no;
	}

	public void setPan_no(String pan_no) {
		this.pan_no = pan_no;
	}

	public int getSkill_1() {
		return skill_1;
	}

	public void setSkill_1(int skill_1) {
		this.skill_1 = skill_1;
	}

	public int getSkill_2() {
		return skill_2;
	}

	public void setSkill_2(int skill_2) {
		this.skill_2 = skill_2;
	}

	public int getSkill_3() {
		return skill_3;
	}

	public void setSkill_3(int skill_3) {
		this.skill_3 = skill_3;
	}

	public String getActiveStatus() {
		return activeStatus;
	}

	public void setActiveStatus(String activeStatus) {
		this.activeStatus = activeStatus;
	}

	public boolean isCurrentlyEmployed() {
		return currentlyEmployed;
	}

	public void setCurrentlyEmployed(boolean currentlyEmployed) {
		this.currentlyEmployed = currentlyEmployed;
	}

	public long getPhoneNum() {
		return phoneNum;
	}

	public void setPhoneNum(long phoneNum) {
		this.phoneNum = phoneNum;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public Date getLastModifiedDate() {
		return lastModifiedDate;
	}

	public void setLastModifiedDate(Date lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}

	
	
}