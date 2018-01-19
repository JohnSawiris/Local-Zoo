import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from './../animal.model';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {

  @Input() addAnimals: Animal[];

  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addNewAnimal(species, name, age, diet, location, careTakers, sex, likes, dislikes) {
    const newAnimal = new Animal(species, name, age, diet, location, careTakers, sex, likes, dislikes);
    this.addAnimals.push(newAnimal);
    this.toggleDisplay();
  }

  toggleDisplay() {
    this.show = !this.show;
  }

}
