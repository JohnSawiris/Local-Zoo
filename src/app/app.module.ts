import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayAnimalsComponent } from './display-animals/display-animals.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayAnimalsComponent,
    AddAnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
