import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randPostCardType'
})
export class RandPostCardTypePipe implements PipeTransform {

  transform(value: string[]): string {
    return value[Math.floor(Math.random() * value.length)];
  }

}
