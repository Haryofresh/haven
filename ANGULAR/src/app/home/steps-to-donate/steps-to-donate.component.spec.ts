import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsToDonateComponent } from './steps-to-donate.component';

describe('StepsToDonateComponent', () => {
  let component: StepsToDonateComponent;
  let fixture: ComponentFixture<StepsToDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsToDonateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsToDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
