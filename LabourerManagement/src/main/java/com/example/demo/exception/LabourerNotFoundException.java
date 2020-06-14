package com.example.demo.exception;

public class LabourerNotFoundException extends RuntimeException
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public LabourerNotFoundException() 
	{
		super();
	}

	public LabourerNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) 
	{
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public LabourerNotFoundException(String message, Throwable cause)
	{
		super(message, cause);
	}

	public LabourerNotFoundException(String message)
	{
		super(message);
	}

	public LabourerNotFoundException(Throwable cause)
	{
		super(cause);
	}

}
