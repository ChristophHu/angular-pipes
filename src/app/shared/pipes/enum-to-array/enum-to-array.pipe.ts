import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumToArray' })
export class EnumToArrayPipe implements PipeTransform {
  transform(value: any): Object {
    console.log(value) // abhängig davon dann das Array [] setzen!
    return Object.keys(value).filter(el => !isNaN(+el)).map(o => {return {index: +o, name: value[o]}})
  }
}
