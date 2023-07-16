import { Component } from '@angular/core';
import { Table } from 'ngx-table-builder';

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

  setWidth(table: Table) {
    const col = table.columns[0];
    if (col) {
      col.width.update((w) => w ? Number.parseInt(w) + 50 + 'px' : '100px');
    }
  }
}
