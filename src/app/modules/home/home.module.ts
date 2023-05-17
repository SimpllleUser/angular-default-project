import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/core';
import { HomeRoutingModule } from '@app/modules/home/home-routing.module';
import { HomeComponent } from '@app/modules/home/pages/home/home.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
