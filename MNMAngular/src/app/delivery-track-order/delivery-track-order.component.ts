import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-track-order',
  templateUrl: './delivery-track-order.component.html',
  styleUrls: ['./delivery-track-order.component.css']
})
export class DeliveryTrackOrderComponent implements OnInit {
  selectedOrder: any; // Variable to store the selected order details

  constructor() { }

  orders = [
    { orderId: 1, collected: false, shipping: false, shipped: false, delivered: false, moneyReceived: false, details: "Details for Order 1" },
    { orderId: 2, collected: false, shipping: false, shipped: false, delivered: false, moneyReceived: false, details: "Details for Order 2" },
    // Add more orders as needed
  ];

  // Function to show details when hovering over a row
  showDetails(order: any) {
    this.selectedOrder = order;
  }

  // Function to hide details when not hovering
  hideDetails() {
    this.selectedOrder = null;
  }

  ngOnInit(): void {
  }

  submitForm() {
    // You can handle form submission here, e.g., send data to backend
    console.log(this.orders);
    // Reset the form or perform any additional action after submission
  }
}
