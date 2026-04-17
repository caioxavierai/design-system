import { NgModule } from '@angular/core';
import { SntButtonComponent } from './components/snt-button.component';
import { SntCardComponent } from './components/snt-card.component';
import { SntBadgeComponent } from './components/snt-badge.component';
import { FadeUpDirective } from './directives/fade-up.directive';

const SUNTER_DS = [
  SntButtonComponent,
  SntCardComponent,
  SntBadgeComponent,
  FadeUpDirective,
];

@NgModule({
  imports: SUNTER_DS,
  exports: SUNTER_DS,
})
export class SunterDsModule {}

/*
  Como usar:

  1. Em módulos legados (NgModule):
     imports: [SunterDsModule]

  2. Em componentes standalone:
     imports: [SntButtonComponent, SntCardComponent, SntBadgeComponent, FadeUpDirective]

  3. No app.config.ts (standalone app), inicialize o ThemeService:
     import { ThemeService } from './sunter-ds/services/theme.service';

     export const appConfig: ApplicationConfig = {
       providers: [
         provideAppInitializer(() => inject(ThemeService).init())
       ]
     };
*/
