import { Cell } from './cell';
import { TemplateRef, WritableSignal } from '@angular/core';

export class CellDef {
  constructor(readonly templateRef: TemplateRef<any>) {
  }
}

export class Column {

  readonly cells: Cell[] = [];

  constructor(readonly code: string,
              readonly width: WritableSignal<string | null>,
              readonly headerCellDef?: CellDef,
              readonly mainCellDef?: CellDef,
              readonly footerCellDef?: CellDef) {
  }

}
