import { NgModule } from '@angular/core';

import { ExtendComponent } from './src/components/extend.component';
import { SubExtendComponent } from './src/components/sub-extend.component';
import { ExtendRoutingModule } from './extend.routes';

export * from './src/components/extend.component';
export * from './src/components/sub-extend.component';

import { SharedModule } from '@lib-test/shared';

@NgModule({
  imports: [ExtendRoutingModule, SharedModule],
  declarations: [ExtendComponent, SubExtendComponent],
  exports: [ExtendComponent , SubExtendComponent, ExtendRoutingModule],
  providers: [],
})
export class ExtendModule {}