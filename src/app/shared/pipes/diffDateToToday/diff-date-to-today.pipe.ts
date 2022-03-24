import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diffDateToToday'
})
export class DiffDateToTodayPipe implements PipeTransform {

  transform(value: string): number {
    const then: Date = new Date(value)
    const today: Date = new Date()
    var diff = Math.round((then.valueOf() - today.valueOf()) / (1000 * 3600 * 24))

    return diff
  }

}
