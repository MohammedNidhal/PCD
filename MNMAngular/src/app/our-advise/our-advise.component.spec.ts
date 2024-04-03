import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAdviseComponent } from './our-advise.component';

describe('OurAdviseComponent', () => {
  let component: OurAdviseComponent;
  let fixture: ComponentFixture<OurAdviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurAdviseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurAdviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
