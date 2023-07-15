import { NgModule } from '@angular/core';
import { NgxTableBuilderComponent } from './ngx-table-builder.component';
import { TableComponent } from './table/table.component';
import { CellComponent } from './cell/cell.component';
import { CellDefDirective } from './cell/cell-def.directive';
import { RowOutletDirective } from './row/row-outlet.directive';
import { RowComponent } from './row/row.component';
import { CellOutletDirective } from './cell/cell-outlet.directive';


@NgModule({
  declarations: [
    NgxTableBuilderComponent,
    TableComponent,
    CellComponent,
    CellDefDirective,
    RowOutletDirective,
    RowComponent,
    CellOutletDirective
  ],
  exports: [
    TableComponent,
    CellComponent,
    CellDefDirective,
    RowOutletDirective,
    RowComponent
  ]
})
export class NgxTableBuilderModule { }
