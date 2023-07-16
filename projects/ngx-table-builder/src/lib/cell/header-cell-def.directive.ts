import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxHeaderCellDef]'
})
export class HeaderCellDefDirective {

  constructor(readonly templateRef: TemplateRef<any>) {
  }

}
