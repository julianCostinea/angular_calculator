import { Component } from '@angular/core';
import { NumberKeyComponent } from '../number-key/number-key.component';
import { NgFor } from '@angular/common';
import { OperatorKeyComponent } from '../operator-key/operator-key.component';

@Component({
  selector: 'app-main-keys',
  standalone: true,
  templateUrl: './main-keys.component.html',
  styleUrl: './main-keys.component.css',
  imports: [NumberKeyComponent, NgFor, OperatorKeyComponent],
})
export class MainKeysComponent {
  keys: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
  numRows: number[] = Array.from(Array(3).keys());
}
