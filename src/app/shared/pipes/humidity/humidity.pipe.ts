import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'humidity'
})
export class HumidityPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return  value + '%' 
  }
}
