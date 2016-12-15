import { NgModule } from '@angular/core';

import { LazyComponent } from './src/components/lazy.component';
import { SubLazyComponent } from './src/components/sub-lazy.component';
import { LazyRoutingModule } from './lazy.routes';

export * from './src/components/lazy.component';
export * from './src/components/sub-lazy.component';

import { SharedModule } from '@lib-test/shared';

@NgModule({
  imports: [LazyRoutingModule, SharedModule],
  declarations: [LazyComponent, SubLazyComponent],
  exports: [LazyComponent , SubLazyComponent, LazyRoutingModule],
  providers: [],
})
export class LazyModule {}