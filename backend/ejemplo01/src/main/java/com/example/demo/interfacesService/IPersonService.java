package com.example.demo.interfacesService;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Person;

public interface IPersonService {

	public List<Person>list();
	
	public Optional<Person>listById(int id);
	
	public int savePerson(Person p);
	
	public Person editPerson(Person p);
	
	public void deletePerson(int id);
}
