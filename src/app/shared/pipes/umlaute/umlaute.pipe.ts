import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'umlaute'
})
export class UmlautePipe implements PipeTransform {

  transform(value: string): string {
    switch (true) {
      case value.includes('Ã¶'):
        value.replace('Ã¤', 'ä')
        break

      case value.includes('Ã¶'):
        value.replace('Ã¶', 'ö')
        break

      case value.includes('Ã¼'):
        value.replace('Ã¼', 'ü')
        break

      case value.includes('ÃŸ'):
        value.replace('ÃŸ', 'ß')
        break
    }
    console.log(value)
    return value
  }

}
