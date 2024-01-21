import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operator-key',
  standalone: true,
  imports: [],
  templateUrl: './operator-key.component.html',
  styleUrl: './operator-key.component.css',
})
export class OperatorKeyComponent {
  @Input() keyValue?: string;
  @Input() bottomRow?: boolean;
}
