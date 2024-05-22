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
    { orderId: 1, collected: false, shipping: false, shipped: false, delivered: false, moneyReceived: false, details: [{"name":"Vitacost Strontium -- 680 mg per serving","image":"https://www.vitacost.com/Images/Products/200/Vitacost/Vitacost-Strontium-835003009800.jpg","price":"TND19.99"},{"name":"Vitacost Strontium -- 680 mg per serving","image":"https://www.vitacost.com/Images/Products/200/Vitacost/Vitacost-CoQ10-835003000807.jpg","price":"TND29.99"} ]},
    { orderId: 2, collected: false, shipping: false, shipped: false, delivered: false, moneyReceived: false, details: [{"name":"Vitacost Vitamin D3","image":"https://www.vitacost.com/Images/Products/200/Vitacost-Synergy/Vitacost-Synergy-Mega-EFA-CoQ10-1200-mg-Omega-3-EPA-And-DHA-100-mg-CoQ10-per-serving-844197027101.jpg","price":"TND33.69"} ] },
    { orderId: 3, collected: false, shipping: false, shipped: false, delivered: false, moneyReceived: false, details: "Details for Order 3" },
    { orderId: 4, collected: false, shipping: false, shipped: false, delivered: false, moneyReceived: false, details: "Details for Order 4" },
    { orderId: 5, collected: false, shipping: false, shipped: false, delivered: false, moneyReceived: false, details: "Details for Order 5" },

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
    // Loop through the orders array
    for (let i = 0; i < this.orders.length; i++) {
      const order = this.orders[i];
      
      // Check if all checkboxes are true for the current order
      if (order.collected && order.shipping && order.shipped && order.delivered && order.moneyReceived) {
        // Remove the order from the array
        this.orders.splice(i, 1);
        
        // Decrement i to handle array shifting after splice
        i--;
      }
    }
  }
}
