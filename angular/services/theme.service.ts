import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<'dark' | 'light'>('dark');

  init() {
    const saved = localStorage.getItem('snt-theme') as 'dark' | 'light' | null;
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light' : 'dark';
    const theme = saved ?? preferred;
    this.theme.set(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggle() {
    const next = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('snt-theme', next);
  }

  setTheme(theme: 'dark' | 'light') {
    this.theme.set(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('snt-theme', theme);
  }
}
