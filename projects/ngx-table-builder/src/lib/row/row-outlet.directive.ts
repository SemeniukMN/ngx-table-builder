import { Directive, ViewContainerRef } from '@angular/core';

export interface Outlet {
  viewContainer: ViewContainerRef;
}

@Directive({
  selector: '[ngxRowOutlet]'
})
export class RowOutletDirective implements Outlet {

  constructor(readonly viewContainer: ViewContainerRef) {
  }

}
