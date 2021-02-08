import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { EventsComponent } from './events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    WorkshopsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot(),
    NgxStripeModule.forRoot('pk_test_51IBHqIENC9m5T7TUjKaeFklATjo7wxsLTmhUih7qtgbVb0SeIWQkQYAhcGRMfLKRpiYn7ixeWSYwP3DocUiNJKvM00uTiuGz69')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
