import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/Person';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  person: Person = new Person();

  ngOnInit(): void {
    this.edit();
  }

  edit() {
    let id = localStorage.getItem("id");
    this.service.getPersonById(+id)
    .subscribe(data=>{
      this.person = data;
    })
  }

  update(person: Person) {
    this.service.updatePerson(person).subscribe(data=>{
      this.person = data;
      alert("Updated succesfully 😎");
      this.router.navigate(["list"]);
    })
  }

}
