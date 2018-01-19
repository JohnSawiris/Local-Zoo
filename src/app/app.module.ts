import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DisplayAnimalsComponent } from './display-animals/display-animals.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AnimalAgePipe } from './animal-age.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DisplayAnimalsComponent,
    AddAnimalComponent,
    AnimalAgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
