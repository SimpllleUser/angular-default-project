import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LanguageSelectorComponent } from '@app/modules/i18n/components/language-selector/language-selector.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule],
  declarations: [LanguageSelectorComponent],
  exports: [LanguageSelectorComponent],
})
export class I18nModule {}
