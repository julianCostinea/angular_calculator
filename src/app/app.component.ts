import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorContainerComponent } from './calculator-container/calculator-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CalculatorContainerComponent],
})
export class AppComponent {
  title = 'angular-calculator';
}
