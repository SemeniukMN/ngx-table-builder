import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  OnDestroy,
  QueryList,
  ViewChild
} from '@angular/core';
import { ColumnDirective } from '../column/column.directive';
import { RowOutletDirective } from '../row/row-outlet.directive';
import { startWith, Subject, takeUntil } from 'rxjs';
import { RowComponent } from '../row/row.component';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements AfterContentInit, OnDestroy {

  @ContentChildren(ColumnDirective, {descendants: true}) columns?: QueryList<ColumnDirective>;
  @ViewChild(RowOutletDirective, {static: true}) rowOutlet!: RowOutletDirective;

  private readonly destroy$ = new Subject<void>();

  ngAfterContentInit() {
    console.log(this.columns?.toArray());
    this.columns?.changes.pipe(
      startWith(0),
      takeUntil(this.destroy$)
    ).subscribe((c) => {
      this.rowOutlet.viewContainer.clear();
      const {instance} = this.rowOutlet.viewContainer.createComponent(RowComponent);
      this.columns?.forEach(({templateRef}) => {
        instance.cellOutlet.viewContainer.createEmbeddedView(templateRef);
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
