import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-track-order',
  templateUrl: './delivery-track-order.component.html',
  styleUrls: ['./delivery-track-order.component.css']
})
export class DeliveryTrackOrderComponent implements OnInit {

  orders: any[] = [
    { orderId: '1', collected: false, shipping: false, shipped: false, delivered: false, moneyReceived: false },
    { orderId: '2', collected: false, shipping: false, shipped: false, delivered: false, moneyReceived: false },
    { orderId: '3', collected: false, shipping: false, shipped: false, delivered: false, moneyReceived: false },
    // Add more orders as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
  submitForm() {
    // You can handle form submission here, e.g., send data to backend
    console.log(this.orders);
    // Reset the form or perform any additional action after submission
  }
}