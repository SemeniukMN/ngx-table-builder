import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { Cell } from '../core/cell';

@Component({
  selector: 'ngx-cell',
  templateUrl: './cell.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent {

  @HostBinding('style.width')
  get width(): string | null {
    return this.cell.width();
  };

  constructor(readonly cell: Cell) {
  }

}
