import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsContainerComponent } from './settings';
import { ZtfComponent } from './oort/ztf/ztf.component';
import { ContactComponent } from './dynamic/contact/contact.component';
import { HomeComponent, AboutComponent } from './static';
import { DataComponent } from './dynamic/data/data.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'background',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsContainerComponent,
    data: { title: 'cccc.menu.settings' }
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'data',
    component: DataComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: !true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
