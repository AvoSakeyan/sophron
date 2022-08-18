import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';
import { GeneralService } from "../../shared/services/general.service";
import { ChartI} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  private barChartData: ChartI | any;
  private lineChartData: ChartI | any;

  constructor(
    private generalService: GeneralService,
  ) {
    Chart.register(...registerables);
    this.generalService.getBarChartData()
    this.generalService.getLineChartData()
  }

  ngOnInit(): void {
    this.generalService.barChartData$.subscribe(data => this.barChartData = data)
    this.generalService.lineChartData$.subscribe(data => this.lineChartData = data)
    this.loadLineChart()
    this.loadBarChart()

  }

  private loadLineChart() {
    // Line Chart
    const lineCanvasEle: any = document.getElementById('line_chart')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
      data: this.lineChartData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  private loadBarChart() {
    // Bar chart
    const barCanvasEle: any = document.getElementById('bar_chart')
    const barChart = new Chart(barCanvasEle.getContext('2d'), {
      type: 'bar',
      data: this.barChartData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
