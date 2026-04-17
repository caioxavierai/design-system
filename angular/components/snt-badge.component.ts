import { Component, Input } from '@angular/core';

@Component({
  selector: 'snt-badge',
  standalone: true,
  templateUrl: './snt-badge.component.html',
  styleUrl: './snt-badge.component.scss',
})
export class SntBadgeComponent {
  @Input() variant: 'active' | 'warn' | 'error' | 'neutral' | 'accent' = 'neutral';
  @Input() pulse = false;
  @Input() dot = true;
}
