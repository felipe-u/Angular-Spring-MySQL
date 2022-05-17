import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/Person';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  persons: Person[];

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getPersons().subscribe((data) => {
      this.persons = data;
    });
  }

  update(person: Person): void {
    localStorage.setItem("id", person.id.toString());
    this.router.navigate(["edit"]);
  }

  delete(person: Person){
    this.service.deletePerson(person).subscribe(data=>{
      this.persons = this.persons.filter(p=>p!==person);
      alert("Ohh the person gonna be deleted...");
    })
  }
}
