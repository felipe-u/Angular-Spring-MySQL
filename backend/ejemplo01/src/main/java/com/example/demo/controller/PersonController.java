package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.interfacesService.IPersonService;
import com.example.demo.model.Person;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/persons"})
public class PersonController {

	@Autowired
	private IPersonService service;
	
	@GetMapping
	public List<Person>list() {
		return service.list();
	}

	@PostMapping
	public int add(@RequestBody Person p) {
		return service.savePerson(p);
	}
	
	@GetMapping(path = {"/{id}"})
	public Optional<Person> ListById(@PathVariable("id") int id) {
		return service.listById(id);
	}
	
	@PutMapping(path = {"/{id}"})
	public Person edit(@RequestBody Person p, @PathVariable("id") int id) {
		p.setId(id);
		return service.editPerson(p);
	}
	
	@DeleteMapping(path = {"/{id}"})
	public void delete(@PathVariable("id") int id) {
		service.deletePerson(id);
	}
}
