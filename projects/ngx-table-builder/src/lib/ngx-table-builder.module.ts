import { NgModule } from '@angular/core';
import { NgxTableBuilderComponent } from './ngx-table-builder.component';
import { TableComponent } from './table/table.component';
import { CellComponent } from './cell/cell.component';
import { CellDefDirective } from './cell/cell-def.directive';
import { RowOutletDirective } from './row/row-outlet.directive';
import { RowComponent } from './row/row.component';
import { CellOutletDirective } from './cell/cell-outlet.directive';
import { ColumnDefDirective } from './column/column-def.directive';
import { HeaderCellDefDirective } from './cell/header-cell-def.directive';
import { FooterCellDefDirective } from './cell/footer-cell-def.directive';
import { HeaderRowComponent } from './row/header-row.component';
import { FooterRowComponent } from './row/footer-row.component';


@NgModule({
  declarations: [
    NgxTableBuilderComponent,
    TableComponent,
    CellComponent,
    CellDefDirective,
    HeaderCellDefDirective,
    FooterCellDefDirective,
    RowOutletDirective,
    HeaderRowComponent,
    FooterRowComponent,
    RowComponent,
    CellOutletDirective,
    ColumnDefDirective,
  ],
  exports: [
    TableComponent,
    CellComponent,
    CellDefDirective,
    HeaderCellDefDirective,
    FooterCellDefDirective,
    ColumnDefDirective,
    RowOutletDirective,
    HeaderRowComponent,
    FooterRowComponent,
    RowComponent
  ]
})
export class NgxTableBuilderModule { }
