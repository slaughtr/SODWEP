import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { MemberListComponent } from './member-list/member-list.component'
import { MemberDetailComponent } from './member-detail/member-detail.component'
import { MemberEditComponent } from './member-edit/member-edit.component'
import { MemberNewComponent } from './member-new/member-new.component'
import { AboutComponent } from './about/about.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'members',
    component: MemberListComponent
  },
  {
    path: 'member/:id',
    component: MemberDetailComponent
  },
  {
    path: 'members/new',
    component: MemberNewComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
