import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxComponentsLibCf6Component } from './ngx-components-lib-cf6.component';

describe('NgxComponentsLibCf6Component', () => {
  let component: NgxComponentsLibCf6Component;
  let fixture: ComponentFixture<NgxComponentsLibCf6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxComponentsLibCf6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxComponentsLibCf6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
