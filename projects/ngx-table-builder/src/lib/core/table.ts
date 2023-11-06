import { Injectable } from '@angular/core';
import { Column } from './column';
import { Row } from './row';

@Injectable()
export class Table {

  columns: Column[] = [];
  rows: Row[] = [];

  addColumn(column: Column) {
    this.columns.push(column);
  }

  writeData(data: Record<string, {}>[]) {

  }

}
