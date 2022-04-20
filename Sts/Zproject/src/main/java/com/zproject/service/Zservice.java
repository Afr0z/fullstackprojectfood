package com.zproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zproject.model.Zmodel;
import com.zproject.repository.Zinterface;

@Service
public class Zservice 
{
	@Autowired
	private Zinterface zi;
	
	public Zmodel insert(Zmodel a)
    {
	   return zi.save(a);
    }

	public Zmodel update(Zmodel b)      
	{
		return zi.save(b);
	}

    public void delete(Zmodel String)
    {
    	zi.delete(String);
    }

    public List<Zmodel> fetch()
    {
    	return zi.findAll();
    }
}
