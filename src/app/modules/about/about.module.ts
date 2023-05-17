import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from '@app/modules/about/about-routing.module';
import { AboutComponent } from '@app/modules/about/pages/about.component';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
