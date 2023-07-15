import { Directive, TemplateRef } from '@angular/core';
import { Cell } from './cell';

@Directive({
  selector: '[ngxHeaderCellDef]'
})
export class HeaderCellDefDirective {

  readonly cell: Cell;

  constructor(readonly templateRef: TemplateRef<any>) {
    this.cell = new Cell(templateRef);
  }

}
