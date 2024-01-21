import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  currentCalculation = '';
  calculatorResult = 0;
  pressedEquals = false;
  pressedOperator = false;
  numberToOperate = '';
  resultSoFar = 0;
  operationForEquals = '';
  firstOperation = true;

  addNumberToCurrentCalculation(key?: string) {
    if (!key) {
      return;
    }

    if (this.haveTooManyKeys()) {
      alert('Too many keys');
      return;
    }

    if (key === ',') {
      if (this.pressedEquals) {
        this.handleEqualsPressed();
      }
      //if there is already a comma in the string, dont add another
      if (this.currentCalculation.includes(',') && !this.pressedOperator) {
        return;
      }
      this.currentCalculation += key;
      this.pressedOperator = false;
      this.numberToOperate += key;
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
      this.handleEqualsPressed();
    }
    this.currentCalculation += addedKey;
    this.numberToOperate += addedKey;
  }

  addOperatorToCurrentCalculation(operator?: string) {
    if (!operator) {
      return;
    }

    if (this.haveTooManyKeys() && operator !== 'C' && operator !== '=') {
      alert('Too many keys');
      return;
    }

    //only allow one operator at a time, so we dont dwell into the loops
    if (this.pressedOperator && !this.isOperatorCOrEquals(operator)) {
      return;
    }

    switch (operator) {
      case 'C':
        this.currentCalculation = '';
        this.calculatorResult = 0;
        this.firstOperation = true;
        this.pressedOperator = false;
        this.clearOperator();
        return;
      case '/':
        this.performOperation('/');
        this.operationForEquals = '/';
        break;
      case '*':
        this.performOperation('*');
        this.operationForEquals = '*';
        break;
      case '-':
        this.performOperation('-');
        this.operationForEquals = '-';
        break;
      case '+':
        this.performOperation('+');
        this.operationForEquals = '+';
        break;
      case '=':
        try {
          //replace so eval can handle comma as decimal
          // this.currentCalculation = this.currentCalculation.replace(',', '.');
          //cannot use eval for adding two decimals
          // this.calculatorResult = eval(this.currentCalculation).toFixed(10);
          this.performOperation(this.operationForEquals);
          this.calculatorResult = this.resultSoFar;
          this.currentCalculation = this.calculatorResult
            .toString()
            .replace('.', ',');
          this.pressedEquals = true;
          this.pressedOperator = false;
          this.firstOperation = true;
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
    this.pressedOperator = true;
    this.currentCalculation += operator;
    this.numberToOperate = '';
  }

  //added so layout doesnt break
  haveTooManyKeys(): boolean {
    return this.currentCalculation.length > 20;
  }

  //going this way to solve adding decimals
  performOperation(operation: string) {
    if (this.numberToOperate === '' && this.calculatorResult === 0) {
      return;
    }

    //if this is the first operation, set the result to the number
    if (this.firstOperation) {
      this.resultSoFar =
        this.calculatorResult != 0
          ? this.calculatorResult
          : parseFloat(this.numberToOperate.replace(',', '.'));
      this.numberToOperate = '';
      this.firstOperation = false;
      return;
    }

    const number = parseFloat(this.numberToOperate.replace(',', '.'));
    switch (operation) {
      case '/':
        this.resultSoFar /= number;
        break;
      case '*':
        this.resultSoFar *= number;
        break;
      case '-':
        this.resultSoFar -= number;
        break;
      case '+':
        this.resultSoFar += number;
        break;
      default:
        //do nothing
        break;
    }
    this.numberToOperate = '';
  }

  clearOperator() {
    this.numberToOperate = '';
    this.resultSoFar = 0;
  }

  isOperatorCOrEquals(operator: string): boolean {
    return operator === 'C' || operator === '=';
  }

  handleEqualsPressed() {
    this.currentCalculation = '';
    this.calculatorResult = 0;
    this.pressedEquals = false;
  }
}
