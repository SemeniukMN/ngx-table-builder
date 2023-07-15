import { Directive, TemplateRef } from '@angular/core';
import { Cell } from './cell';

@Directive({
  selector: '[ngxFooterCellDef]'
})
export class FooterCellDefDirective {

  readonly cell: Cell;

  constructor(readonly templateRef: TemplateRef<any>) {
    this.cell = new Cell(templateRef);
  }

}
