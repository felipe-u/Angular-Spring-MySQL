import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonCreateComponent } from './persons/person-create/person-create.component';
import { PersonUpdateComponent } from './persons/person-update/person-update.component';
import { ServiceService } from './service/service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonListComponent,
    PersonCreateComponent,
    PersonUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
