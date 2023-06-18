import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CellOutletDirective } from './cell-outlet.directive';

@Component({
  selector: 'ngx-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent {

  @ViewChild(CellOutletDirective, {static: true}) cellOutlet!: CellOutletDirective;

  constructor() {
  }

}
