import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceArrayByProperty'
})
export class SliceArrayByPropertyPipe implements PipeTransform {

  transform(input: any, byProperty: string, value: string = ''): any {
    console.log(input)
    console.log(value)
    if (Array.isArray(input)) {
      let result = input.filter(el => el[byProperty] != value)
      console.log(result)
      return result
    }
    return input
  }
}
