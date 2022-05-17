import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/persons';

  getPersons(){
    return this.http.get<Person[]>(this.Url);
  }

  createPerson(person: Person){
    return this.http.post<Person>(this.Url,person);
  }

  getPersonById(id: number){
    return this.http.get<Person>(this.Url+"/"+id)
  }

  updatePerson(person: Person){
    return this.http.put<Person>(this.Url+"/"+person.id, person);
  }

  deletePerson(person: Person) {
    return this.http.delete<Person>(this.Url+"/"+person.id);
  }
}
