import { TestBed } from '@angular/core/testing';

import { NgxComponentsLibCf6Service } from './ngx-components-lib-cf6.service';

describe('NgxComponentsLibCf6Service', () => {
  let service: NgxComponentsLibCf6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxComponentsLibCf6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
