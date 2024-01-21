import { Component } from '@angular/core';
import { MainKeysComponent } from '../main-keys/main-keys.component';
import { SideKeysComponent } from '../side-keys/side-keys.component';

@Component({
  selector: 'app-key-container',
  standalone: true,
  imports: [MainKeysComponent, SideKeysComponent],
  templateUrl: './key-container.component.html',
  styleUrl: './key-container.component.css',
})
export class KeyContainerComponent {}
