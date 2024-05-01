import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Sleep Hours'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['22/01', '23/01', '24/01', '25/01', '26/01']
    },
    series: [
      {
        name: 'Hours',
        data: [5, 6, 5.5,8,7.5]
      } as any
    ]
  })
    pieChart =new Chart({
      chart: {
        type: 'pie',
        plotShadow:false,
      },
      title: {
        text: 'Top 4 Categories',
        floating: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie:{
          innerSize :'99%' , 
          borderWidth:10,
          borderColor:'',
          slicedOffset: 10,
          dataLabels:{
            connectorWidth:0,
          }

        } 
      },
      series: [
        {type: 'pie',
          data: [{name: 'Vitamins',y:1,color:"#325D79"} , {name: 'No Glutin',y:2,color:"#4BAB1D"} , {name: 'Sugar Free',y:3,color:"#F9A26C"} ,{name: 'Other',y:4,color:"#B1B1B1"} ]
        }
      ]
    })
}
