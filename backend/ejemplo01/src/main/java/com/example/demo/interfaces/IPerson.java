package com.example.demo.interfaces;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Person;

@Repository
public interface IPerson extends CrudRepository<Person, Integer> {

}
