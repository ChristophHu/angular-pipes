import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, startAt: number = 0, limit: number = 20, ellipsis: string = '...'): any {
    if (value.length > 10) {
      return value.substr(startAt, limit) + ellipsis
    }
    return value
  }
}
