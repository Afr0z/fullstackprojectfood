package com.zproject.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Zmodel 
{
	@Id
	private String name;
	private int quantity;
	private String phoneno;
	private String address;
	
	public Zmodel()
	{
		
	}
	
	public Zmodel(String name, int quantity, String phoneno, String address)
	{
		super();
		this.name=name;
		this.quantity=quantity;
		this.phoneno=phoneno;
		this.address=address;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
}
