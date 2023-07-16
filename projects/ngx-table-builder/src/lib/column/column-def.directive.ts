import { AfterContentInit, ContentChild, Directive, Input } from '@angular/core';
import { CellDefDirective } from '../cell/cell-def.directive';
import { Table } from '../table/table';
import { Column } from './column';
import { HeaderCellDefDirective } from '../cell/header-cell-def.directive';
import { FooterCellDefDirective } from '../cell/footer-cell-def.directive';
import { Cell } from '../cell/cell';

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
    this.column = new Column(this.code, this.width);
    this.column.headerCell = this.headerCellDef && new Cell(this.headerCellDef.templateRef, this.column.width);
    this.column.mainCell = this.cellDef && new Cell(this.cellDef.templateRef, this.column.width);
    this.column.footerCell = this.footerCellDef && new Cell(this.footerCellDef.templateRef, this.column.width);
    this.table.addColumn(this.column);
  }

}
