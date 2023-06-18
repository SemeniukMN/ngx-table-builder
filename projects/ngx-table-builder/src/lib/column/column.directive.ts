import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxColumnDef]'
})
export class ColumnDirective {

  constructor(readonly templateRef: TemplateRef<any>) {
  }

}
