import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { OperatorKeyComponent } from '../operator-key/operator-key.component';
import { sideKeys } from '../helpers/keys';

@Component({
  selector: 'app-side-keys',
  standalone: true,
  templateUrl: './side-keys.component.html',
  styleUrl: './side-keys.component.css',
  imports: [NgFor, OperatorKeyComponent],
})
export class SideKeysComponent {
  sideKeys = sideKeys;
}
