import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-key',
  standalone: true,
  imports: [],
  templateUrl: './number-key.component.html',
  styleUrl: './number-key.component.css',
})
export class NumberKeyComponent {
  @Input() keyValue?: string;
  @Input() bottomRow?: boolean;
}
