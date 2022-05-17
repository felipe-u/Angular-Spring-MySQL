import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/Person';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css'],
})
export class PersonCreateComponent implements OnInit {
  constructor(private router: Router, private service: ServiceService) {}

  person: Person = new Person();

  ngOnInit(): void {
  }

  save(person: Person) {
    this.service.createPerson(person).subscribe(data=>{
      alert("Person was added succesfully!");
      this.router.navigate(["list"]);
    })
  }
}
