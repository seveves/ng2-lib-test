import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyComponent } from './src/components/lazy.component';
import { SubLazyComponent } from './src/components/sub-lazy.component';

const lazyRoutes: Routes = [
  {
    path: '',
    component: LazyComponent,
  },
  {
    path: 'main',
    component: LazyComponent,
  },
  {
    path: 'sub',
    component: SubLazyComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(lazyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LazyRoutingModule {}