import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDeliveryComponent } from './signup-delivery.component';

describe('SignupDeliveryComponent', () => {
  let component: SignupDeliveryComponent;
  let fixture: ComponentFixture<SignupDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupDeliveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
