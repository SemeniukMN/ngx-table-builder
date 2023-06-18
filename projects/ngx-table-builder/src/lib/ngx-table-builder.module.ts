import { NgModule } from '@angular/core';
import { NgxTableBuilderComponent } from './ngx-table-builder.component';
import { TableComponent } from './table/table.component';
import { ColumnComponent } from './column/column.component';
import { ColumnDirective } from './column/column.directive';
import { RowOutletDirective } from './row/row-outlet.directive';
import { RowComponent } from './row/row.component';
import { CellOutletDirective } from './row/cell-outlet.directive';


@NgModule({
  declarations: [
    NgxTableBuilderComponent,
    TableComponent,
    ColumnComponent,
    ColumnDirective,
    RowOutletDirective,
    RowComponent,
    CellOutletDirective
  ],
  exports: [
    TableComponent,
    ColumnComponent,
    ColumnDirective,
    RowOutletDirective,
    RowComponent
  ]
})
export class NgxTableBuilderModule { }
