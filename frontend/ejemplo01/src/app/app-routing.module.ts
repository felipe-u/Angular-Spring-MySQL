import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonCreateComponent } from './persons/person-create/person-create.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonUpdateComponent } from './persons/person-update/person-update.component';

const routes: Routes = [
  {path: 'add', component: PersonCreateComponent},
  {path: 'list', component: PersonListComponent, children:[
   // {path: 'edit/:id', component: PersonUpdateComponent}
  ]},
  {path: 'edit', component: PersonUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
