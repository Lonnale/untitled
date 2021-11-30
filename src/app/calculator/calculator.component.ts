import { Component, OnInit } from '@angular/core';
import {jitOnlyGuardedExpression} from "@angular/compiler/src/render3/util";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
  result: string;

  constructor() {
    this.result = "";
  }

  ngOnInit(): void {
  }

  addValue(value: string) {
    console.log('addValue value: ' + value);

    if (value == '=') {
      // lasketaan lauseke esim
      // eval ('2 + 2');
      console.log('lausekkeen arvo on: ' + eval('2+2'));
      this.result = eval(this.result);
    }



       else if (value == '*'){
      console.log('lausekkeen arvo on: ' + eval('2*2'));
        this.result = eval(this.result);
    }

      else if (value == '-') {
      console.log('lausekkeen arvo on: ' + eval('2-2'));
      this.result = eval(this.result);
    }

    else {
      this.result = this.result.concat(value);
    }



  }


  }
