import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTrackOrderComponent } from './delivery-track-order.component';

describe('DeliveryTrackOrderComponent', () => {
  let component: DeliveryTrackOrderComponent;
  let fixture: ComponentFixture<DeliveryTrackOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryTrackOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryTrackOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
