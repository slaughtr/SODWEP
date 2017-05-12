import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { MemberListComponent } from './member-list/member-list.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'members',
    component: MemberListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
