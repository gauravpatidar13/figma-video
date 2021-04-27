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
      colors:["#173cff","#bebebe"],
      series: [
        {
          name: "SERIES A",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "Series B",
          data: [70, 61, 6, 71, 9, 42, 39, 21, 48]
        }
      ],
      chart: {
        height: 350,
        type: "area",
        
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      
    };

    var chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
chart.render();
  }

}
