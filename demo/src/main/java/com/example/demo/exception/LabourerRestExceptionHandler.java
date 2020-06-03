package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class LabourerRestExceptionHandler 
{
	@ExceptionHandler
	public ResponseEntity<LabourerErrorResponse> handleException(LabourerNotFoundException exc)
	{
		LabourerErrorResponse error = new LabourerErrorResponse();
		
		error.setMessage(exc.getMessage());
		error.setStatus(HttpStatus.NOT_FOUND.value());
		error.setTimeStamp(System.currentTimeMillis());
		
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler
	public ResponseEntity<LabourerErrorResponse> handleException(LabourerDataInvalidException exc)
	{
		LabourerErrorResponse error = new LabourerErrorResponse();
		
		error.setMessage(exc.getMessage());
		error.setStatus(HttpStatus.NOT_ACCEPTABLE.value());
		error.setTimeStamp(System.currentTimeMillis());
		
		return new ResponseEntity<>(error, HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler
	public ResponseEntity<LabourerErrorResponse> handleException(Exception exc)
	{
		LabourerErrorResponse error = new LabourerErrorResponse();
		
		error.setMessage(exc.getMessage());
		error.setStatus(HttpStatus.BAD_REQUEST.value());
		error.setTimeStamp(System.currentTimeMillis());
		
		return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
	}
	
}
