package com.example.demo.entity;

public class Response 
{
	private long employersCount;
	
	private long pendingEmployers;
	
	private long approvedEmployers;
	
	private long labourersCount;
	
	private long activeLabourers;
	
	private long inActiveLabourers;
	
	private long govtUserCount;
	
	private long activeGovtUsers;
	
	private long inActiveGovtUsers;
	
	public Response()
	{
		
	}

	public Response(long employersCount, long pendingEmployers, long approvedEmployers, long labourersCount,
			long activeLabourers, long inActiveLabourers, long govtUserCount, long activeGovtUsers,
			long inActiveGovtUsers) {
		this.employersCount = employersCount;
		this.pendingEmployers = pendingEmployers;
		this.approvedEmployers = approvedEmployers;
		this.labourersCount = labourersCount;
		this.activeLabourers = activeLabourers;
		this.inActiveLabourers = inActiveLabourers;
		this.govtUserCount = govtUserCount;
		this.activeGovtUsers = activeGovtUsers;
		this.inActiveGovtUsers = inActiveGovtUsers;
	}

	public long getEmployersCount() 
	{
		return employersCount;
	}

	public void setEmployersCount(long employersCount) 
	{
		this.employersCount = employersCount;
	}

	public long getPendingEmployers() 
	{
		return pendingEmployers;
	}

	public void setPendingEmployers(long pendingEmployers) 
	{
		this.pendingEmployers = pendingEmployers;
	}

	public long getApprovedEmployers() 
	{
		return approvedEmployers;
	}

	public void setApprovedEmployers(long approvedEmployers) 
	{
		this.approvedEmployers = approvedEmployers;
	}
	
	public long getLabourersCount() 
	{
		return labourersCount;
	}

	public void setLabourersCount(long labourersCount) 
	{
		this.labourersCount = labourersCount;
	}

	public long getActiveLabourers() 
	{
		return activeLabourers;
	}

	public void setActiveLabourers(long activeLabourers) 
	{
		this.activeLabourers = activeLabourers;
	}

	public long getInActiveLabourers() 
	{
		return inActiveLabourers;
	}

	public void setInActiveLabourers(long inActiveLabourers) 
	{
		this.inActiveLabourers = inActiveLabourers;
	}
	
	public long getGovtUserCount() {
		return govtUserCount;
	}

	public void setGovtUserCount(long govtUserCount) {
		this.govtUserCount = govtUserCount;
	}

	public long getActiveGovtUsers() {
		return activeGovtUsers;
	}

	public void setActiveGovtUsers(long activeGovtUsers) {
		this.activeGovtUsers = activeGovtUsers;
	}

	public long getInActiveGovtUsers() {
		return inActiveGovtUsers;
	}

	public void setInActiveGovtUsers(long inActiveGovtUsers) {
		this.inActiveGovtUsers = inActiveGovtUsers;
	}

	@Override
	public String toString() {
		return "Response [employersCount=" + employersCount + ", pendingEmployers=" + pendingEmployers
				+ ", approvedEmployers=" + approvedEmployers + ", labourersCount=" + labourersCount
				+ ", activeLabourers=" + activeLabourers + ", inActiveLabourers=" + inActiveLabourers
				+ ", govtUserCount=" + govtUserCount + ", activeGovtUsers=" + activeGovtUsers + ", inActiveGovtUsers="
				+ inActiveGovtUsers + "]";
	}
	
}
