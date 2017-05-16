import { Pipe, PipeTransform } from '@angular/core';
import { Dog } from './dog.model'

declare var moment: any

@Pipe({
  name: 'listFilter',
  pure: true
})

export class ListFilterPipe implements PipeTransform {

  transform(input: any, filter: string) {
    if (filter === 'all') {
      return input
    } else if (filter === 'lowranks') {
      return input.filter(dog => (dog.rank === 'Mongrel') || (dog.rank === 'Feral'))
    } else if (filter === 'highranks') {
      return input.filter(dog => (dog.rank === 'Alpha') || (dog.rank === 'Right Paw') || (dog.rank === 'Left Paw'))
    } else if (filter === 'young') {
      return input.filter(dog =>  dog.age < 3)
    } else if (filter === 'old') {
      return input.filter(dog =>  dog.age > 3)
    }
  }
  
}
