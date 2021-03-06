package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "person")
public class Person {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String name;
	
	@Column
	private String last_name;

	public Person(int id, String name, String last_name) {
		super();
		this.id = id;
		this.name = name;
		this.last_name = last_name;
	}
	
	public Person() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}	
}
