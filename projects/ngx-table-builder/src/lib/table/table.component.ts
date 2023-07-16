import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { RowOutletDirective } from '../row/row-outlet.directive';
import { Subject } from 'rxjs';
import { RowComponent } from '../row/row.component';
import { Table } from './table';
import { Cell } from '../cell/cell';
import { HeaderRowComponent } from '../row/header-row.component';
import { FooterRowComponent } from '../row/footer-row.component';
import { ColumnLineComponent } from '../line/column-line.component';
import { RowLineComponent } from '../line/row-line.component';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [Table],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements AfterContentInit, OnDestroy {

  @ViewChild('headerRow', {read: RowOutletDirective, static: true})
  headerRowOutlet!: RowOutletDirective;

  @ViewChild('mainRow', {read: RowOutletDirective, static: true})
  mainRowOutlet!: RowOutletDirective;

  @ViewChild('footerRow', {read: RowOutletDirective, static: true})
  footerRowOutlet!: RowOutletDirective;

  @Input() data: T[] = [];

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly table: Table) {
  }

  ngAfterContentInit() {
    this.renderHeaderRow();
    this.renderMainRow();
    this.renderFooterRow();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private renderHeaderRow() {
    this.headerRowOutlet.viewContainer.clear();
    this.headerRowOutlet.viewContainer.createComponent(RowLineComponent);
    const {instance} = this.headerRowOutlet.viewContainer.createComponent(HeaderRowComponent);
    this.table.columns
      .map(({headerCell}) => headerCell)
      .filter((cell): cell is Cell => !!cell)
      .forEach((cell, i, arr) => {
        instance.cellOutlet.viewContainer.createComponent(ColumnLineComponent);
        instance.cellOutlet.viewContainer.createEmbeddedView(cell.templateRef);
        if (i === arr.length - 1) {
          instance.cellOutlet.viewContainer.createComponent(ColumnLineComponent);
        }
      });
  }

  private renderMainRow() {
    this.mainRowOutlet.viewContainer.clear();
    this.mainRowOutlet.viewContainer.createComponent(RowLineComponent);
    this.data.forEach((row) => {
      const {instance} = this.mainRowOutlet.viewContainer.createComponent(RowComponent);
      this.table.columns
        .map(({mainCell}) => mainCell)
        .filter((cell): cell is Cell => !!cell)
        .forEach((cell, i, arr) => {
          instance.cellOutlet.viewContainer.createComponent(ColumnLineComponent);
          instance.cellOutlet.viewContainer.createEmbeddedView(cell.templateRef);
          if (i === arr.length - 1) {
            instance.cellOutlet.viewContainer.createComponent(ColumnLineComponent);
          }
        });
      this.mainRowOutlet.viewContainer.createComponent(RowLineComponent);
    });
  }

  private renderFooterRow() {
    this.footerRowOutlet.viewContainer.clear();
    const {instance} = this.footerRowOutlet.viewContainer.createComponent(FooterRowComponent);
    this.table.columns
      .map(({footerCell}) => footerCell)
      .filter((cell): cell is Cell => !!cell)
      .forEach((cell, i, arr) => {
        instance.cellOutlet.viewContainer.createComponent(ColumnLineComponent);
        instance.cellOutlet.viewContainer.createEmbeddedView(cell.templateRef);
        if (i === arr.length - 1) {
          instance.cellOutlet.viewContainer.createComponent(ColumnLineComponent);
        }
      });
    this.footerRowOutlet.viewContainer.createComponent(RowLineComponent);
  }

}
