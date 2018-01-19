import { Pipe, PipeTransform } from '@angular/core';

import { Animal } './animal.model';
@Pipe({
  name: 'animalAge',
  pure: false
})
export class AnimalAgePipe implements PipeTransform {

  transform(input: Animal[], filter) {
    const output: Animal[] = [];
    if(filter >= 1 && filter <= 2) {
      input.map(animal => {
        if(animal.age >= 1 && animal.age <= 2) {
          output.push(animal);
        }
      });
      return output;
    } else if(filter > 2) {
      input.map(animal => {
        if(animal.age > 2) {
          output.push(animal);
        }
      });
      return output;
    } else {
      return input;
    }
  }

}
