import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { CellDefDirective } from '../cell/cell-def.directive';
import { RowOutletDirective } from '../row/row-outlet.directive';
import { startWith, Subject, takeUntil } from 'rxjs';
import { RowComponent } from '../row/row.component';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements AfterContentInit, OnDestroy {

  @ContentChildren(CellDefDirective, {descendants: true}) columns?: QueryList<CellDefDirective>;
  @ViewChild(RowOutletDirective, {static: true}) rowOutlet!: RowOutletDirective;

  @Input() data: T[] = [];

  private readonly destroy$ = new Subject<void>();

  ngAfterContentInit() {
    console.log(this.columns?.toArray());
    this.columns?.changes.pipe(
      startWith(0),
      takeUntil(this.destroy$)
    ).subscribe((c) => {
      this.rowOutlet.viewContainer.clear();
      this.data.forEach((row) => {
        const {instance} = this.rowOutlet.viewContainer.createComponent(RowComponent);
        this.columns?.forEach(({templateRef}) => {
          instance.cellOutlet.viewContainer.createEmbeddedView(templateRef);
        });
      })
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
