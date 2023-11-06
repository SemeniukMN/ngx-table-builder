import { WritableSignal } from '@angular/core';
import { Cell } from './cell';

export class Row {

  readonly height?: WritableSignal<string | null>;
  readonly cells: Cell[] = [];

  constructor() {

  }

}
