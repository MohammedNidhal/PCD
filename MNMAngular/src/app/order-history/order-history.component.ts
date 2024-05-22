import { Component } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent {
  orders = [
    { orderId: 1, value: 50, discount: '5%', total: 47.50, deliveredOn: new Date('2024-04-27')},
    { orderId: 2, value: 100, discount: '10%', total: 90.00, deliveredOn: new Date('2024-04-09')},
    { orderId: 3, value: 75, discount: '0%', total: 75.00, deliveredOn: new Date('2024-03-1')},
    { orderId: 4, value: 120, discount: '8%', total: 110.40, deliveredOn: new Date('2024-02-22')},
    { orderId: 5, value: 200, discount: '15%', total: 170.00, deliveredOn: new Date('2023-12-08')}
  ];
}

