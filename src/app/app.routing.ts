import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
