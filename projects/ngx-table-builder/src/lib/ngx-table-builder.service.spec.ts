import { TestBed } from '@angular/core/testing';

import { NgxTableBuilderService } from './ngx-table-builder.service';

describe('NgxTableBuilderService', () => {
  let service: NgxTableBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTableBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
