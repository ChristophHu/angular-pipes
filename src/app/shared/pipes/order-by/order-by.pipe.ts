import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(input: any, byProperty: string = 'name', order: string = 'ASC'): any {
    if (Array.isArray(input) && input.length > 0) {
      if (order == 'ASC') {
        input.sort((a, b) => (a[byProperty] < b[byProperty] ? -1 : 1))
      } else {
        input.sort((a, b) => (a[byProperty] > b[byProperty] ? -1 : 1))
      }
      return input
    }
    return input
  }

    // transform(array: any[], filter: any): any[] {
  //   if(typeof filter === 'string') {
  //       return this.sortAray(array, filter)
  //   } else {
  //       for (var i = filter.length -1; i >= 0; i--) {
  //           array = this.sortAray(array, filter[i]);
  //       }

  //       return array;
  //   }
  // }

  // private sortAray(array: any[], field: any) {
  //     return array.sort((a: any, b: any): any => {
  //         if(typeof a[field] !== 'string') {
  //             a[field] !== b[field] ? a[field] < b[field] ? -1 : 1 : 0
  //         } else {
  //             a[field].toLowerCase() !== b[field].toLowerCase() ? a[field].toLowerCase() < b[field].toLowerCase() ? -1 : 1 : 0
  //         }
  //     });
  // }
}
