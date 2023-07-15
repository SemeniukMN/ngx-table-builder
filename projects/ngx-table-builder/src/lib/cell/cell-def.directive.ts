import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxCellDef]'
})
export class CellDefDirective {

  constructor(readonly templateRef: TemplateRef<any>) {
  }

}
