import { Cell } from '../cell/cell';
import { signal, WritableSignal } from '@angular/core';

export class Column {

  readonly width: WritableSignal<string | null>;

  mainCell?: Cell;
  headerCell?: Cell;
  footerCell?: Cell;

  constructor(readonly code: string, width?: string) {
    this.width = signal(width ?? null);
  }

}
