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
      text: 'Line Chart 1'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [5, 6, 5.5, 8, 7.5]
      } as any
    ]
  });

  lineChart2 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Line Chart 2'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 2',
        data: [3, 4, 4.5, 6, 5.5]
      } as any
    ]
  });

  barChart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Bar Chart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Bar Series',
        data: [25, 50, 75, 100]
      } as any
    ]
  });
}
