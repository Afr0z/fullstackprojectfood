package com.zproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zproject.model.Zmodel;

@Repository
public interface Zinterface extends JpaRepository<Zmodel,String>
{

}
