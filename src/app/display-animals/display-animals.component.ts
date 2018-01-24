import { Component, OnInit, Input } from '@angular/core';

import { Animal } from './../animal.model';

@Component({
  selector: 'display-animals',
  templateUrl: './display-animals.component.html',
  styleUrls: ['./display-animals.component.scss']
})
export class DisplayAnimalsComponent implements OnInit {

  @Input() displayAnimals: Animal[];

  @Input() childSelectedAnimal: Animal;

  toggleDisplay: boolean = false;

  filterByAge: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onChange(option) {
    this.filterByAge = parseInt(option);
  }

  editAnimal(selected) {
    this.childSelectedAnimal = selected;
    this.toggle();
  }

  toggle() {
    this.toggleDisplay = !this.toggleDisplay;
  }

}
