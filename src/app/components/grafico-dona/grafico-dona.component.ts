import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
export class GraficoDonaComponent implements OnInit {
  @Input() doughnutChartData: number[] | any[];
  @Input() doughnutChartLabels: any[];
  @Input() doughnutChartType: string;

  constructor() { }

  ngOnInit() {
  }

}
