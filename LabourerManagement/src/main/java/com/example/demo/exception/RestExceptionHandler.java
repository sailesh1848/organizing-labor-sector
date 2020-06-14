package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler 
{
	@ExceptionHandler
	public ResponseEntity<ErrorResponse> handleException(EmployerDataInvalidException exc)
	{
		ErrorResponse response = new ErrorResponse();
		
		response.setMessage(exc.getMessage());
		
		response.setStatus(HttpStatus.NOT_ACCEPTABLE.value());
		
		response.setTimeStamp(System.currentTimeMillis());
		
		return new ResponseEntity<>(response, HttpStatus.NOT_ACCEPTABLE);
	}

	@ExceptionHandler
	public ResponseEntity<ErrorResponse> handleException(LabourerDataInvalidException exc)
	{
		ErrorResponse response = new ErrorResponse();
		
		response.setMessage(exc.getMessage());
		
		response.setStatus(HttpStatus.NOT_ACCEPTABLE.value());
		
		response.setTimeStamp(System.currentTimeMillis());
		
		return new ResponseEntity<>(response, HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler
	public ResponseEntity<ErrorResponse> handleException(EmployerTableEmptyException exc)
	{
		ErrorResponse response = new ErrorResponse();
		
		response.setMessage(exc.getMessage());
		response.setStatus(HttpStatus.NOT_FOUND.value());
		response.setTimeStamp(System.currentTimeMillis());

		return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler
	public ResponseEntity<ErrorResponse> handleException(Exception exc)
	{
		ErrorResponse response = new ErrorResponse();
		
		response.setMessage(exc.getMessage());
		
		response.setStatus(HttpStatus.BAD_REQUEST.value());
		
		response.setTimeStamp(System.currentTimeMillis());
		
		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	}
}
