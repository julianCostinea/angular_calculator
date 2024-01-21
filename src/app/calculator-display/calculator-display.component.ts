import { Component } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-calculator-display',
  standalone: true,
  imports: [NgClass],
  templateUrl: './calculator-display.component.html',
  styleUrl: './calculator-display.component.css',
})
export class CalculatorDisplayComponent {
  constructor(private calculatorService: CalculatorService) {}

  get currentCalculation(): string {
    return this.calculatorService.currentCalculation;
  }

  get calculatorResult(): number {
    return this.calculatorService.calculatorResult;
  }
}
