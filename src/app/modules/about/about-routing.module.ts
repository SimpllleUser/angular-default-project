import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Layout } from '@app/layout/layout.service';
import { AboutComponent } from '@app/modules/about/pages/about.component';

const routes: Routes = [
  Layout.childRoutes([{ path: 'about', component: AboutComponent, data: { title: marker('About') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AboutRoutingModule {}
