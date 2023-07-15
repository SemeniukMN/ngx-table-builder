import { Injectable } from '@angular/core';
import { Column } from '../column/column';

@Injectable()
export class Table {

  columns: Column[] = [];

  addColumn(column: Column) {
    this.columns.push(column);
  }

}
