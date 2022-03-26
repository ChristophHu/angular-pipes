import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overlapArrayByProperty'
})
export class OverlapArrayByPropertyPipe implements PipeTransform {

  transform(input: any, byProperty: string, value: string[] = []): any {
    console.log(`${input}, ${value}`)
    if (Array.isArray(input)) {
      let result = [...new Set(input)].filter(el => value.includes(el[byProperty]))
      console.log(result)
      return result
    }
    return input
  }
}
