import { Component, OnInit, Input } from '@angular/core';

import { Animal } from './../animal.model';

@Component({
  selector: 'display-animals',
  templateUrl: './display-animals.component.html',
  styleUrls: ['./display-animals.component.scss']
})
export class DisplayAnimalsComponent implements OnInit {
  @Input() childAnimals: Animal[];

  constructor() { }

  ngOnInit() {
  }

}
