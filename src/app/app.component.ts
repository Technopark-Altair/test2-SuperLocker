import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Calculator";
  otric:string;
  firstOperand: Boolean;
  secondOperand: Boolean;
  operator: string;
  result: Boolean;
  errorMessage: string;
  doCalc(){
    if(this.otric=='otr'){
      if(this.operator=="and"){
      this.result=this.firstOperand&&this.secondOperand;
      this.result=!this.result
      }
      else if (this.operator=="or") {
        this.result=this.firstOperand||this.secondOperand;
        this.result=!this.result
      } else {
        this.errorMessage='Что-то пошло не так'
      }
    }else{
      if(this.operator=="and"){
        this.result=this.firstOperand&&this.secondOperand;
        }
        else if (this.operator=="or") {
          this.result=this.firstOperand||this.secondOperand;
        } else {
          this.errorMessage='Что-то пошло не так'
        }
    }
  }
}
