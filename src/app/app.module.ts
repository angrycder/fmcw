import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatTreeModule} from '@angular/material/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { EventsComponent } from './events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { ClubComponent } from './club/club.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { CountdownModule } from 'ngx-countdown';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { ThemeModule } from './theme/theme.module';
import {MatMenuModule} from '@angular/material/menu';
import { PayComponent } from './pay/pay.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { LeaderComponent } from './leader/leader.component';
import { TeamComponent } from './team/team.component';
import { MemoryComponent } from './memory/memory.component';
import { CaComponent } from './ca/ca.component';

@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    WorkshopsComponent,
    EventsComponent,
    ClubComponent,
    PayComponent,
    LeaderComponent,
    TeamComponent,
    MemoryComponent,
    CaComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
        MatCardModule,
    BrowserAnimationsModule,
    CountdownModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    NgImageSliderModule,
     SocialLoginModule,
    MatInputModule,
    NgxWebstorageModule.forRoot(),
    MatSidenavModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    IvyCarouselModule,
    MatMenuModule,
    MatTabsModule,
    HttpClientModule,
    ThemeModule,
    MatTreeModule
  ],
  providers: [{
      provide: 'SocialAuthServiceConfig',
      useValue: {
      autoLogin: false,
      providers: [
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '214944693451-2sue5kgd5p6b0sufrbfvabkesvc11esc.apps.googleusercontent.com'
            )
          }
        ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
