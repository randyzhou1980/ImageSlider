import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ConfigService } from './_services/config.service';

@NgModule({
  imports: [
    HttpClientModule,
    NgbModule.forRoot()
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    ConfigService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if ( parentModule ) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only!');
    }
  }
}
