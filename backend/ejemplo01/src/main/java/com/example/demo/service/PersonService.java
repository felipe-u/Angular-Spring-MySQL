package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.interfaces.IPerson;
import com.example.demo.interfacesService.IPersonService;
import com.example.demo.model.Person;

@Service
public class PersonService implements IPersonService {

	@Autowired
	private IPerson repository;

	@Override
	public List<Person> list() {
		return (List<Person>) repository.findAll();
	}

	@Override
	public Optional<Person> listById(int id) {
		return repository.findById(id);
	}
	
	@Override
	public int savePerson(Person p) {
		int response = 0;
		Person person = repository.save(p);
		if (!person.equals(null)) {
			response = 1;
		}
		return response;
	}
	
	@Override
	public Person editPerson(Person p) {
		return repository.save(p);
	}

	@Override
	public void deletePerson(int id) {
		Optional<Person> p = repository.findById(id);
		if (p != null) {
			repository.deleteById(id);
		}
	}
	

}
