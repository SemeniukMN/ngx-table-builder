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
    const {instance} = this.headerRowOutlet.viewContainer.createComponent(RowComponent);
    this.table.columns
      .map(({headerCell}) => headerCell)
      .filter((cell): cell is Cell => !!cell)
      .forEach((cell) => {
        instance.cellOutlet.viewContainer.createEmbeddedView(cell.templateRef);
      });
  }

  private renderMainRow() {
    this.mainRowOutlet.viewContainer.clear();
    this.data.forEach((row) => {
      const {instance} = this.mainRowOutlet.viewContainer.createComponent(RowComponent);
      this.table.columns
        .map(({mainCell}) => mainCell)
        .filter((cell): cell is Cell => !!cell)
        .forEach((cell) => {
          instance.cellOutlet.viewContainer.createEmbeddedView(cell.templateRef);
        });
    });
  }

  private renderFooterRow() {
    this.footerRowOutlet.viewContainer.clear();
    const {instance} = this.footerRowOutlet.viewContainer.createComponent(RowComponent);
    this.table.columns
      .map(({footerCell}) => footerCell)
      .filter((cell): cell is Cell => !!cell)
      .forEach((cell) => {
        instance.cellOutlet.viewContainer.createEmbeddedView(cell.templateRef);
      });
  }

}
