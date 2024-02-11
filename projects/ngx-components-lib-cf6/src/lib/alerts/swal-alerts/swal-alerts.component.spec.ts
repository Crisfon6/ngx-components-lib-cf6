import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwalAlertsComponent } from './swal-alerts.component';

describe('SwalAlertsComponent', () => {
  let component: SwalAlertsComponent;
  let fixture: ComponentFixture<SwalAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwalAlertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwalAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
