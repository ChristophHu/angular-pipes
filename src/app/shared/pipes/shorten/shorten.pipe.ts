import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, startAt: number = 0, limit: number = 20): any {
    if (value.length > 10) {
      return value.substr(startAt, limit) + '...'
    }
    return value
  }

}
