import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellComponent } from './cell.component';

describe('ColumnComponent', () => {
  let component: CellComponent;
  let fixture: ComponentFixture<CellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CellComponent]
    });
    fixture = TestBed.createComponent(CellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
