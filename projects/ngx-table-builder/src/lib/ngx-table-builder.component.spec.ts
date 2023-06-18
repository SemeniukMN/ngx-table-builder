import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableBuilderComponent } from './ngx-table-builder.component';

describe('NgxTableBuilderComponent', () => {
  let component: NgxTableBuilderComponent;
  let fixture: ComponentFixture<NgxTableBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTableBuilderComponent]
    });
    fixture = TestBed.createComponent(NgxTableBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
