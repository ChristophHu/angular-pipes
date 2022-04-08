import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  text: string = 'Thats a default text!'
  lp: string = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

  fruits: any[] = [
    { id: 1, name: 'Orange',       priority: '2' },
    { id: 2, name: 'Apple',        priority: '1' },
    { id: 3, name: 'Kiwi',         priority: '2' },
    { id: 4, name: 'Cranberry',    priority: '3' },
    { id: 5, name: 'Banana',       priority: '2' },
    { id: 6, name: 'Blueberries',  priority: '1' }
  ]
}
