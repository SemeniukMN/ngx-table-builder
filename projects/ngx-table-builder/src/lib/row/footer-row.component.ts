import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellOutletDirective } from '../cell/cell-outlet.directive';

@Component({
  selector: 'ngx-footer-row',
  template: '<ng-container ngxCellOutlet></ng-container>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterRowComponent {

  @ViewChild(CellOutletDirective, {static: true}) cellOutlet!: CellOutletDirective;

  constructor() {
  }

}
