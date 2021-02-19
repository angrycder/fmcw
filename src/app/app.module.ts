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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { ClubComponent } from './club/club.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { CountdownModule } from 'ngx-countdown';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';;

@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    WorkshopsComponent,
    EventsComponent,
    ClubComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    CountdownModule,
    MatFormFieldModule,
    MatToolbarModule,
    NgImageSliderModule,
    MatInputModule,
    NgxWebstorageModule.forRoot(),
    MatSidenavModule,
    ReactiveFormsModule,
MatIconModule,
MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
