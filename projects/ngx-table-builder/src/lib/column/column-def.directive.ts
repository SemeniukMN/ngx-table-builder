import { AfterContentInit, ContentChild, Directive, Input } from '@angular/core';
import { CellDefDirective } from '../cell/cell-def.directive';
import { Table } from '../table/table';
import { Column } from './column';
import { HeaderCellDefDirective } from '../cell/header-cell-def.directive';
import { FooterCellDefDirective } from '../cell/footer-cell-def.directive';

@Directive({
  selector: '[ngxColumnDef]'
})
export class ColumnDefDirective implements AfterContentInit {

  @Input({alias: 'ngxColumnDef', required: true}) code!: string;

  @ContentChild(CellDefDirective) cellDef?: CellDefDirective;
  @ContentChild(HeaderCellDefDirective) headerCellDef?: HeaderCellDefDirective;
  @ContentChild(FooterCellDefDirective) footerCellDef?: FooterCellDefDirective;

  column!: Column;

  constructor(private readonly table: Table) {
  }

  ngAfterContentInit() {
    this.column = new Column(this.code,
      this.cellDef?.cell,
      this.headerCellDef?.cell,
      this.footerCellDef?.cell
    );
    this.table.addColumn(this.column);
  }

}
