import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDataRegistrationComponent } from './medical-data-registration.component';

describe('MedicalDataRegistrationComponent', () => {
  let component: MedicalDataRegistrationComponent;
  let fixture: ComponentFixture<MedicalDataRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalDataRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalDataRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
