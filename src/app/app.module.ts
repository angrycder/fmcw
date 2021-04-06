import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import {MatMenuModule} from '@angular/material/menu';
import { PayComponent } from './pay/pay.component';
import { TeamComponent } from './team/team.component';
import { CaComponent } from './ca/ca.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    WorkshopsComponent,
    EventsComponent,
    PayComponent,
    TeamComponent,
    CaComponent,
    SponsorsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
        MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
     SocialLoginModule,
    MatInputModule,
    MatSnackBarModule,
    NgxWebstorageModule.forRoot(),
    MatSidenavModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCarouselModule.forRoot(),
    MatTabsModule,
    HttpClientModule,
  ],
  providers: [{
      provide: 'SocialAuthServiceConfig',
      useValue: {
      autoLogin: false,
      providers: [
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              //'214944693451-2sue5kgd5p6b0sufrbfvabkesvc11esc.apps.googleusercontent.com'
              "214944693451-iqen2gebk39m2v4c7ip7t2nf8c6r6b3a.apps.googleusercontent.com"
            )
          }
        ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
