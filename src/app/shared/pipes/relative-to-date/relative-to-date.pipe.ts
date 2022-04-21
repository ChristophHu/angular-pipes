import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeToDate'
})
export class RelativeToDatePipe implements PipeTransform {

  transform(value: Date): string {
    let result: string = ''

    let now = new Date().getTime();
    let delta = (now - value.getTime()) / 1000;
    console.log(delta)

    switch (true) {
      case (delta < 10):
        result = 'jetzt'
        break
      case (delta < 60):
        result = 'vor ' + ~~(delta) + ' Sekunden'
        break
      case (delta < 60*60):
        result = 'vor ' + ~~(delta / 60) + ' Minuten'
        break
      case (delta < 24*60*60):
        result = 'vor ' + ~~(delta / (60*60)) + ' Stunden'
        break
      case (delta < 7*24*60*60):
        result = `vor ${~~(delta / (24*60*60))} Tagen`
        break
      case (delta < 365*24*60*60):
        result = `vor ${~~(delta / (7*24*60*60))} Wochen`
        break
      case (delta > 365*24*60*60):
        result = `vor mehr als einem Jahr`
        break
    }

    return result
  }

}
