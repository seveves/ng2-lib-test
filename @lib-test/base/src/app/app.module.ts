import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '@lib-test/shared';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    SharedModule.forRoot()
  ],
  declarations: [AppComponent, HomeComponent],
  exports: [AppComponent, HomeComponent],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }