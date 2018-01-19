import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from './../animal.model';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {

  @Input() childAnimals: Animal[];

  constructor() { }

  ngOnInit() {
  }

  show: boolean = false;

  addNewAnimal(species, name, age, diet, location, careTakers, sex, likes, dislikes) {
    const newAnimal = new Animal(species, name, age, diet, location, careTakers, sex, likes, dislikes);
    this.childAnimals.push(newAnimal);
    this.toggle();
  }

  toggle() {
    this.show = !this.show;
  }

}
