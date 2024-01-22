import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  currentCalculation = '';
  calculatorResult = 0;
  pressedEquals = false;
  pressedOperator = false;
  pressedNumber = false;
  arrayToCalculate: Array<string> = [];
  currentNumber = '';
  currentOperator = '';

  addNumberToCurrentCalculation(key?: string) {
    if (!key) {
      return;
    }

    if (this.haveTooManyKeys()) {
      alert('Too many keys');
      return;
    }
    if (this.pressedEquals) {
      this.handleEqualsPressed();
    }

    if (key === ',') {
      //if there is already a comma in the string, dont add another
      if (this.currentNumber.includes(',')) {
        return;
      }
      //if the current number is empty, add a 0 before the comma
      if (this.currentNumber === '') {
        this.addNumberToCalculation('0');
      }
    }

    this.addNumberToCalculation(key);
    if (this.currentOperator !== '') {
      this.arrayToCalculate.push(this.currentOperator);
      this.currentOperator = '';
    }
  }

  addNumberToCalculation(key?: string) {
    this.currentCalculation += key;
    this.pressedOperator = false;
    this.currentNumber += key;
    this.pressedNumber = true;
  }

  addOperatorToCurrentCalculation(operator?: string) {
    //if there is no operator or no number, do nothing
    //maybe allow negative numbers first?
    if (
      !operator ||
      (this.arrayToCalculate.length === 0 &&
        !this.pressedNumber &&
        operator !== '-')
    ) {
      return;
    }

    const isEqualsOrClear = this.isOperatorCOrEquals(operator);

    if (this.haveTooManyKeys() && !isEqualsOrClear) {
      alert('Too many keys');
      return;
    }

    //if an operator was pressed before, remove it and we add the new one at the end
    if (this.pressedOperator && !isEqualsOrClear && !this.pressedEquals) {
      this.currentCalculation = this.currentCalculation.slice(
        0,
        this.currentCalculation.length - 1
      );
    }

    switch (operator) {
      case 'C':
        this.clearEverything();
        return;
      case '=':
        if (this.currentNumber !== '') {
          this.arrayToCalculate.push(this.currentNumber);
          this.currentNumber = '';
        }
        //if there is only one number in the array, return it
        if (this.arrayToCalculate.length === 1) {
          this.calculatorResult = parseFloat(
            this.arrayToCalculate[0].replace(',', '.')
          );
          this.currentCalculation = this.arrayToCalculate[0];
          this.pressedEquals = true;
        }
        //when more than 2 numbers are in the array, calculate the result
        if (this.arrayToCalculate.length >= 2) {
          const calculationResult = this.calculateArray(this.arrayToCalculate);
          this.calculatorResult = parseFloat(calculationResult);
          this.arrayToCalculate = [calculationResult];
          this.currentCalculation = calculationResult;
          this.pressedEquals = true;
        }
        return;
      default:
        //do nothing
        break;
    }

    this.currentOperator = operator;
    if (this.currentNumber !== '') {
      this.arrayToCalculate.push(this.currentNumber);
      this.currentNumber = '';
    }
    this.currentCalculation += operator;
    this.currentNumber = '';
    this.pressedOperator = true;
    this.pressedNumber = false;
    this.pressedEquals = false;
  }

  //added so layout doesnt break
  haveTooManyKeys(): boolean {
    return this.currentCalculation.length > 20;
  }

  isOperatorCOrEquals(operator: string): boolean {
    return operator === 'C' || operator === '=';
  }

  handleEqualsPressed() {
    this.currentCalculation = '';
    this.arrayToCalculate = [];
    this.currentOperator = '';
    this.calculatorResult = 0;
    this.pressedEquals = false;
  }

  clearEverything() {
    this.currentCalculation = '';
    this.calculatorResult = 0;
    this.pressedOperator = false;
    this.pressedNumber = false;
    this.currentNumber = '';
    this.currentOperator = '';
    this.arrayToCalculate = [];
    this.pressedEquals = false;
  }

  calculateArray(calculation: Array<string>): string {
    if (calculation.length === 1) {
      return calculation[0];
    }

    const hasDivision = calculation.indexOf('/');
    if (hasDivision !== -1) {
      const result = this.calculateResult('/', hasDivision);
      //if the result is undefined, it means we are dividing by 0 or something else went wrong
      if (result === undefined) {
        return "Can't calculate division";
      }
      calculation.splice(hasDivision - 1, 3, result.toString());
      return this.calculateArray(calculation);
    }

    const hasMultiplication = calculation.indexOf('*');
    if (hasMultiplication !== -1) {
      const result = this.calculateResult('*', hasMultiplication);
      if (result === undefined) {
        return "Can't calculate multiplication";
      }
      calculation.splice(hasMultiplication - 1, 3, result.toString());
      return this.calculateArray(calculation);
    }

    const hasSubtraction = calculation.indexOf('-');
    //if the subtraction is at the beginning of the array, it means we are dealing with a negative number
    //so we unite the first 2 elements and calculate the rest of the array
    if (hasSubtraction === 0) {
      calculation.splice(hasSubtraction, 2, calculation[0] + calculation[1]);
      return this.calculateArray(calculation);
    }
    if (hasSubtraction !== -1) {
      const result = this.calculateResult('-', hasSubtraction);
      if (result === undefined) {
        return "Can't calculate subtraction";
      }
      calculation.splice(hasSubtraction - 1, 3, result.toString());
      return this.calculateArray(calculation);
    }

    const hasAddition = calculation.indexOf('+');
    if (hasAddition !== -1) {
      const result = this.calculateResult('+', hasAddition);
      if (result === undefined) {
        return "Can't calculate addition";
      }
      calculation.splice(hasAddition - 1, 3, result.toString());
      return this.calculateArray(calculation);
    }

    return "Can't calculate. Unknown.";
  }

  calculateResult(operation: string, index: number): number | undefined {
    const number1 = this.arrayToCalculate[index - 1];
    const number2 = this.arrayToCalculate[index + 1];
    if (!number1) {
      return;
    }
    if (!number2) {
      return parseFloat(number1.replace(',', '.')); //if there is only one number, return it
    }
    const num1 = parseFloat(number1.replace(',', '.'));
    const num2 = parseFloat(number2.replace(',', '.'));

    switch (operation) {
      case '/':
        return num1 / num2;
      case '*':
        return num1 * num2;
      case '-':
        return num1 - num2;
      case '+':
        return num1 + num2;
      default:
        //do nothing
        break;
    }
    return;
  }
}
