import { Component } from '@angular/core';
import { CalculatorDisplayComponent } from '../calculator-display/calculator-display.component';
import { KeyContainerComponent } from '../key-container/key-container.component';

@Component({
  selector: 'app-calculator-container',
  standalone: true,
  imports: [CalculatorDisplayComponent, KeyContainerComponent],
  templateUrl: './calculator-container.component.html',
  styleUrl: './calculator-container.component.css',
})
export class CalculatorContainerComponent {}
