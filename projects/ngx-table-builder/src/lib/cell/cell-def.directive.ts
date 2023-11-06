import { Directive, TemplateRef } from '@angular/core';
import { CellDef } from '../core/column';

@Directive({
  selector: '[ngxCellDef]'
})
export class CellDefDirective {

  readonly cellDef: CellDef;

  constructor(readonly templateRef: TemplateRef<any>) {
    this.cellDef = new CellDef(templateRef);
  }

}

@Directive({
  selector: '[ngxHeaderCellDef]'
})
export class HeaderCellDefDirective extends CellDefDirective {
}

@Directive({
  selector: '[ngxFooterCellDef]'
})
export class FooterCellDefDirective extends CellDefDirective {
}
