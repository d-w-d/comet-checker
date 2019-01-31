import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { environment } from '@env/environment';
import { SharedModule } from '@app/shared';
import { ContactComponent } from './contact/contact.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [ContactComponent, DataComponent],
  imports: [
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class DynamicModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http, //
    `${environment.i18nPrefix}/assets/i18n/examples/`,
    '.json'
  );
}
