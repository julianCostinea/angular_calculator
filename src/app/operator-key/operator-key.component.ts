import { Component, Input } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-operator-key',
  standalone: true,
  imports: [],
  templateUrl: './operator-key.component.html',
  styleUrl: './operator-key.component.css',
})
export class OperatorKeyComponent {
  constructor(private calculatorService: CalculatorService) {}

  addKey(keyValue?: string): void {
    this.calculatorService.addOperatorToCurrentCalculation(keyValue);
  }

  @Input() keyValue?: string;
  @Input() bottomRow?: boolean;
}
