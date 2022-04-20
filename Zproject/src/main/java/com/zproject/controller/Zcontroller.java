package com.zproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zproject.model.Zmodel;
import com.zproject.service.Zservice;

@RestController
public class Zcontroller 
{
	@Autowired
	private Zservice zs;
	
	@PostMapping("/insert")
	@CrossOrigin(origins="http://localhost:4200")
	public Zmodel insertFood(@RequestBody Zmodel a)
	{
		return zs.insert(a);
	}
	
	@PostMapping("/update")
	@CrossOrigin(origins="http://localhost:4200") 
    public Zmodel updateFood(@RequestBody Zmodel b)
    {
       return zs.update(b);		
    }
	
	@PostMapping("/delete")
	@CrossOrigin(origins="http://localhost:4200")
	public void deleteFood(@RequestBody Zmodel String) 
	{
		zs.delete(String);

	}

	@GetMapping("/fetch")
	@CrossOrigin(origins="http://localhost:4200")
    public List<Zmodel>fetchFood()	
	{
		return zs.fetch();
	}
}
