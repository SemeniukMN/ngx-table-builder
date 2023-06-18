import { Directive, ViewContainerRef } from '@angular/core';
import { Outlet } from './row-outlet.directive';

@Directive({
  selector: '[ngxCellOutlet]'
})
export class CellOutletDirective implements Outlet {

  constructor(readonly viewContainer: ViewContainerRef) { }

}
