import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { InterestCalcComponent } from './interest-calc/interest-calc.component';
import { ToolsComponent } from './tools.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { SquidGameComponent } from '../games/squid-game/squid-game.component';


const routes: Routes = [
  {path:'calculators',component: ToolsComponent,children:[
    {path:'interest-calculator',component:InterestCalcComponent }
  ]},
  {
    path:'games', component: ToolsComponent, children:[
      {
        path:'squid-game', component: SquidGameComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    ToolsComponent,
    InterestCalcComponent,
    DoughnutChartComponent,
    SquidGameComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    InterestCalcComponent,
    ToolsComponent,
    RouterModule
  ]
})
export class ToolsModule { }
