import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import {} from 'apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.css']
})
export class StaticsComponent implements OnInit {
title="Apex Chart";

@ViewChild("chart") chart:ChartComponent;
public chartOptions;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions=this.chartOptions = {
        show:false,
        points:{
          marker:{
            x:"X",
            y:"y",
            size:8
          }
          ,label:{
            borderColor:"#f00",
            text:"point"
          }
        },
        tooltip:{
        custom:[function({series,seriesIndex,dataPointIndex,w}){
        
          return `<div class="box" style="color:#000;padding:5px 8px">${series[seriesIndex][dataPointIndex]}</div>`;
            },function({series,seriesIndex,dataPointIndex,w}){
             
              return `<div class="arrow_box" style="color:#000;padding:5px 8px">${series[seriesIndex][dataPointIndex]}</div>`;
                }]}
                ,
      stroke:{
        show:true,
        curver:'smooth',
        width:2
      },
      colors:["#173cff","#bebebe"],
      series: [
        {
          name: "",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 18]
        },
        {
          name: "",
          data: [70, 61, 6, 71, 9, 42, 39, 21, 48]
        }
      ],
      chart: {
        toolbar:{show:false},
        height: 350,
        type: "area",
        
      },
      title: {
        text: ""
      },
      xaxis: {
        tooltip:{
enabled:false
        },
        categories: ["0", "1",  "2",  "3",  "4",  "5",  "6",  "7", "8"],
     labels:{
       show:true
     }
      },
      yaxis:{
tooltip:{
  enabled:false,
},
labels:{
  show:false
}
      },
      grid:{
        position:"front",
        show:true,
        xaxis:{
          lines:{
            show:false
          }
        },
        yaxis:{
          lines:{
            show:true
          }
        }
      },
      markers:{
        size:[0,0],
        enabled:false,
        show:false,
        shape:"circle",
        discrete:[],
      }
      ,
      toolbar:{
        show:false
      },
      dataLabels:{
        enabled:false
      }
     ,legend:{
       show:false
     }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
chart.render();
  }

}