import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from './../animal.model';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {

  @Output() addAnimal = new EventEmitter();

  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addNewAnimal(species, name, age, diet, location, careTakers, sex, likes, dislikes) {

    const newAnimal = new Animal(species, name, age, diet, location, careTakers, sex, likes, dislikes);

    this.addAnimal.emit(newAnimal);
    this.toggleDisplay();
  }

  toggleDisplay() {
    this.show = !this.show;
  }

}
