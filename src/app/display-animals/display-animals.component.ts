import { Component, OnInit, Input } from '@angular/core';

import { Animal } from './../animal.model';

@Component({
  selector: 'display-animals',
  templateUrl: './display-animals.component.html',
  styleUrls: ['./display-animals.component.scss']
})
export class DisplayAnimalsComponent implements OnInit {
  @Input() childAnimals: Animal[];

  filterByAge: number = 0;

  onChange(option) {
    this.filterByAge = parseInt(option);
  }

  constructor() { }

  ngOnInit() {
  }

}
