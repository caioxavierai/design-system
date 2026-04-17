import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'snt-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './snt-button.component.html',
  styleUrl: './snt-button.component.scss',
})
export class SntButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' | 'destructive' = 'primary';
  @Input() loading = false;
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
}
