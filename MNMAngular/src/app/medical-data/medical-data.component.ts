import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-medical-data',
  templateUrl: './medical-data.component.html',
  styleUrl: './medical-data.component.scss'
})
export class MedicalDataComponent {
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
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
          data: [{name: 'Category 1',y:1,color:""} , {name: 'Category 2',y:2,color:""} , {name: 'Category 3',y:3,color:""} ,{name: 'Category 4',y:4,color:""} ]
        }
      ]
    })
}
