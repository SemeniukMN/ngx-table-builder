import { Cell } from '../cell/cell';

export class Column {

  constructor(readonly code: string,
              readonly mainCell?: Cell,
              readonly headerCell?: Cell,
              readonly footerCell?: Cell) {
  }
}
