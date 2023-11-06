import { AfterContentInit, ContentChild, Directive, Input, signal } from '@angular/core';
import { CellDefDirective, FooterCellDefDirective, HeaderCellDefDirective } from '../cell/cell-def.directive';
import { Table } from '../core/table';
import { Column } from '../core/column';

@Directive({
  selector: '[ngxColumnDef]'
})
export class ColumnDefDirective implements AfterContentInit {

  @Input({alias: 'ngxColumnDef', required: true}) code!: string;

  @Input() width?: string;

  @ContentChild(CellDefDirective) cellDef?: CellDefDirective;
  @ContentChild(HeaderCellDefDirective) headerCellDef?: HeaderCellDefDirective;
  @ContentChild(FooterCellDefDirective) footerCellDef?: FooterCellDefDirective;

  column!: Column;

  constructor(private readonly table: Table) {
  }

  ngAfterContentInit() {
    this.column = new Column(
      this.code,
      signal(this.width ?? null),
      this.headerCellDef?.cellDef,
      this.cellDef?.cellDef,
      this.footerCellDef?.cellDef
    );
    this.table.addColumn(this.column);
  }

}
