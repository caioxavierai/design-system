import { Component, Input } from '@angular/core';

@Component({
  selector: 'snt-card',
  standalone: true,
  templateUrl: './snt-card.component.html',
  styleUrl: './snt-card.component.scss',
})
export class SntCardComponent {
  @Input() variant: 'default' | 'glow' | 'shimmer' | 'magnetic' = 'default';
  @Input() shimmer = false;
  @Input() glow = false;
  @Input() magnetic = false;
}
