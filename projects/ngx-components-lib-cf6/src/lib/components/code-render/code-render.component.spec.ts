import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeRenderComponent } from './code-render.component';

describe('CodeRenderComponent', () => {
  let component: CodeRenderComponent;
  let fixture: ComponentFixture<CodeRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
