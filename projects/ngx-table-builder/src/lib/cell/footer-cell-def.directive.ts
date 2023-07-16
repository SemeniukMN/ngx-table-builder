import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxFooterCellDef]'
})
export class FooterCellDefDirective {

  constructor(readonly templateRef: TemplateRef<any>) {
  }

}
