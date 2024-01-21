import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  currentCalculation = '';
  calculatorResult = 0;
  pressedEquals = false;

  addNumberToCurrentCalculation(key?: string) {
    if (!key) {
      return;
    }

    if (key === ',') {
      //if there is already a comma in the string, dont add another
      if (this.currentCalculation.includes(',')) {
        return;
      }
      this.currentCalculation += key;
      return;
    }

    const addedKey = parseInt(key, 10);

    //shouldnt reach this but just in case
    if (isNaN(addedKey)) {
      alert('Not a number');
      return;
    }

    //if equals was pressed, reset the calculation
    if (this.pressedEquals) {
      this.currentCalculation = '';
      this.calculatorResult = 0;
      this.pressedEquals = false;
    }
    this.currentCalculation += addedKey;
  }

  addOperatorToCurrentCalculation(operator?: string) {
    if (!operator) {
      return;
    }

    switch (operator) {
      case 'C':
        this.currentCalculation = '';
        this.calculatorResult = 0;
        return;
      case '=':
        try {
          //replace so eval can handle comma as decimal
          this.currentCalculation = this.currentCalculation.replace(',', '.');
          this.calculatorResult = eval(this.currentCalculation);
          this.currentCalculation = this.calculatorResult.toString();
          this.pressedEquals = true;
          return;
        } catch (error) {
          alert('Invalid calculation');
        }
        return;
      default:
        //do nothing
        break;
    }

    this.pressedEquals = false;
    this.currentCalculation += operator;
  }
}
