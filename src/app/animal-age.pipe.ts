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
      for(let i = 0; i < input.length; i++) {
        if(input[i].age >= 1 &&input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(filter > 2) {
      for(let i = 0; i < input.length; i++) {
        if(input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
