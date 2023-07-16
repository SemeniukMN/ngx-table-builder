import { TemplateRef, WritableSignal } from '@angular/core';

export class Cell {

  constructor(readonly templateRef: TemplateRef<any>,
              readonly width: WritableSignal<string | null>) {
  }

}
