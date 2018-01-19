import { Component, OnInit, Input } from '@angular/core';

import { Animal } from './../animal.model';

@Component({
  selector: 'display-animals',
  templateUrl: './display-animals.component.html',
  styleUrls: ['./display-animals.component.scss']
})
export class DisplayAnimalsComponent implements OnInit {

  @Input() displayAnimals: Animal[];

  @Input() displayShow: boolean;

  filterByAge: number = 0;

  @Input() childSelectedAnimal: Animal;

  onChange(option) {
    this.filterByAge = parseInt(option);
  }

  editAnimal(selected) {
    this.childSelectedAnimal = selected;
    this.toggle();
  }

  toggle() {
    this.displayShow = !this.displayShow;

  }

  constructor() { }

  ngOnInit() {
  }

}
