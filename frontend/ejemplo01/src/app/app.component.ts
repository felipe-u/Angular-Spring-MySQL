import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo011';
  btnSelected = '';

  toList() {
    this.btnSelected = 'List is working';
  }

  toAdd() {
    this.btnSelected = 'Add is working';
  }
}
