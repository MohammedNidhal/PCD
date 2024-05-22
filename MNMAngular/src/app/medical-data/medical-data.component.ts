import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-medical-data',
  templateUrl: './medical-data.component.html',
  styleUrl: './medical-data.component.scss'
})
export class MedicalDataComponent {
  lineChart1 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly BMI Score'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] // Add more months as needed
    },
    yAxis: {
      title: {
        text: 'BMI Score'
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'BMI Score',
        data: [20, 21, 21, 22, 20], // Replace with actual BMI scores for each month
        color:'#325D79'
      } as any
    ]
  });


  lineChart2 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Money Spent on health Last Orders'
    },
    xAxis: {
      categories: ['Order 1', 'Order 2', 'Order 3', 'Order 4', 'Order 5'] // Add more orders as needed
    },
    yAxis: {
      title: {
        text: 'Money Spent'
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Money Spent',
        data: [50, 60, 55, 70, 65], // Replace with actual money spent for each order
        color:'#325D79'
      } as any
    ]
  });


  barChart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Sleep Hours During a Week'
    },
    xAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] // Days of the week
    },
    yAxis: {
      title: {
        text: 'Sleep Hours'
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Sleep Hours',
        data: [8, 7, 7.5, 8, 8, 9, 9.5], // Replace with actual sleep hours for each day
        color:'#325D79'
      } as any
    ]
  });

}
