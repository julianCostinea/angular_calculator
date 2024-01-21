import { Component, Input } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-number-key',
  standalone: true,
  imports: [],
  templateUrl: './number-key.component.html',
  styleUrl: './number-key.component.css',
})
export class NumberKeyComponent {
  constructor(private calculatorService: CalculatorService) {}

  addKey(keyValue?: string): void {
    this.calculatorService.addNumberToCurrentCalculation(keyValue);
  }

  @Input() keyValue?: string;
  @Input() bottomRow?: boolean;
}
