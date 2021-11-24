import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-calc',
  templateUrl: './interest-calc.component.html',
  styleUrls: ['./interest-calc.component.sass']
})
export class InterestCalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    public totalInvestment;
    public roi;
    public months;
    public years;
    public maturityAmt;
    public yearType=true;
    public finalInvestment;
    
    public fdCalculator:boolean=true;

    // Doughnut
    public demodoughnutChartData:number[] = [10, 0];

    public calculateMaturity():void{
      
      if(this.totalInvestment!=undefined && this.months!=undefined&& this.roi!=undefined){
        var duration=this.months;
        if(this.yearType){
          if(this.fdCalculator){
            var ciValue=Math.pow(1+(this.roi/400),4*(duration/12));
            this.maturityAmt=Math.round((this.totalInvestment*ciValue)-this.totalInvestment);
            this.finalInvestment=this.totalInvestment;
          }else{
            this.maturityAmt=this.totalInvestment*((duration*(duration+1)/(2*12))*this.roi/100);
            this.finalInvestment=this.totalInvestment*duration;
          }
        }else{
          duration=duration*12;
          if(this.fdCalculator){
            var ciValue=Math.pow(1+(this.roi/400),4*(duration/12));
            this.maturityAmt=Math.round((this.totalInvestment*ciValue)-this.totalInvestment);
            this.finalInvestment=this.totalInvestment;
          }else{
          this.maturityAmt=this.totalInvestment*((duration*(duration+1)/(2*12))*this.roi/100);
          this.finalInvestment=this.totalInvestment*duration;
          }
        }
        
        this.demodoughnutChartData=[this.totalInvestment,this.maturityAmt];
      }
    }
    public getMaturityVal():number{
      var finalMatVal= this.finalInvestment+this.maturityAmt;
      if(finalMatVal){
        return finalMatVal
      }
    }

    public changeInvestmentType(){
      this.fdCalculator=!this.fdCalculator;
      this.totalInvestment=undefined;
      this.finalInvestment=undefined;
      this.maturityAmt=undefined;
      this.roi=undefined;
      this.months=undefined;
      return this.fdCalculator;
    }
}
