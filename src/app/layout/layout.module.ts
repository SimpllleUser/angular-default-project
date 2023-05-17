import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { I18nModule } from '@app/i18n';
import { AuthModule } from '@app/modules/auth/auth.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../layout/header/header.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, AuthModule, I18nModule, RouterModule],
  declarations: [HeaderComponent, LayoutComponent],
})
export class LayoutModule {}
