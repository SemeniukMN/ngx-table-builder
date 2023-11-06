import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Table } from 'ngx-table-builder';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'ngx-table-builder-preview';
  data$: Observable<any[]>;

  constructor(private readonly http: HttpClient) {
    this.data$ = this.http.get<any[]>('/assets/mock.json');
  }

  setWidth(table: Table) {
    const col = table.columns[0];
    if (col) {
      col.width.update((w) => w ? Number.parseInt(w) + 50 + 'px' : '100px');
    }
  }
}
