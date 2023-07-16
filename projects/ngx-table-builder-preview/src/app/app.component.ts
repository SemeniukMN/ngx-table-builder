import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-table-builder-preview';

  data = [
    {
      num: 1,
      name: 'First row'
    },
    {
      num: 2,
      name: 'Second row'
    },
    {
      num: 3,
      name: 'Third row'
    },
    {
      num: 4,
      name: 'Fourth row'
    }
  ]
}
