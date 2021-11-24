import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.sass']
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public doughnutChartLabels: string[] = ['Total Investment', 'Total Interest'];
  @Input() public demodoughnutChartData: number[] = [10, 0];
  public doughnutChartType: string = 'doughnut';
  public chartColors: any[] = [{ backgroundColor: ["#0c71c3", "#04d480"] }];
  public chartOptions =
    {
      responsive: true,
      elements:
      {
        point:
        {
          radius: 1,
          hitRadius: 5,
          hoverRadius: 10,
          hoverBorderWidth: 2
        }
      }
    };

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
