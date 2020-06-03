package com.example.demo.exception;

public class LabourerErrorResponse 
{
	private int status;
	
	private String message;
	
	private long timeStamp;
	
	public LabourerErrorResponse()
	{
		
	}

	public int getStatus()
	{
		return status;
	}

	public void setStatus(int status) 
	{
		this.status = status;
	}

	public String getMessage() 
	{
		return message;
	}

	public void setMessage(String message) 
	{
		this.message = message;
	}

	public long getTimeStamp() 
	{
		return timeStamp;
	}

	public void setTimeStamp(long timeStamp) 
	{
		this.timeStamp = timeStamp;
	}

	public LabourerErrorResponse(int status, String message, long timeStamp) 
	{
		this.status = status;
		this.message = message;
		this.timeStamp = timeStamp;
	}

}
