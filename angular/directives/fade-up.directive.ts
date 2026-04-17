import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sntFadeUp]',
  standalone: true,
})
export class FadeUpDirective implements OnInit {
  @Input('sntFadeUp') delay = 0;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const el = this.el.nativeElement;
    const delayMs = this.delay || 0;

    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = [
      `opacity 0.6s cubic-bezier(.16,1,.3,1) ${delayMs}ms`,
      `transform 0.6s cubic-bezier(.16,1,.3,1) ${delayMs}ms`,
    ].join(', ');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }
}

/*
  Uso no template Angular:
  <div sntFadeUp>Aparece ao scrollar</div>
  <div [sntFadeUp]="200">Aparece com 200ms de delay</div>
*/
