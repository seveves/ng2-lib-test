import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ExtendModule } from '@lib-test/extend';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'extend', loadChildren: () => ExtendModule },
  {
    path: 'lazy',
    loadChildren: () => new Promise((resolve) => {
      (require as any).ensure([], (require: any) => {
        resolve(require('@lib-test/lazy').LazyModule);
      });
    }),
  }
];