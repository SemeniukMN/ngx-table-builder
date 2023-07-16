import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellOutletDirective } from '../cell/cell-outlet.directive';

@Component({
  selector: 'ngx-header-row',
  template: '<ng-container ngxCellOutlet></ng-container>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderRowComponent {

  @ViewChild(CellOutletDirective, {static: true}) cellOutlet!: CellOutletDirective;

  constructor() {
  }

}
