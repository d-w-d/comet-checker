import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'brznk.menu.about' }
  },
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'brznk.menu.features' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
