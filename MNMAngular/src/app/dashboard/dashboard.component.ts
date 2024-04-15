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
    series: [
      {
        name: 'Line 1',
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
        text: 'Pie chart',
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
          data: [{name: 'Category 1',y:1,color:"#325D79"} , {name: 'Category 2',y:2,color:"#4BAB1D"} , {name: 'Category 3',y:3,color:"#F9A26C"} ,{name: 'Category 4',y:4,color:"#B1B1B1"} ]
        }
      ]
    })
}
