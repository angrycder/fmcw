import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { CartComponent } from '../cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

const routes: Routes =  [
{
	path:"",
	component:ProfileComponent,
	canActivate:[AuthGuard]
},
{
	path:"login",
	component:LoginComponent
},
{
	path:"cart",
	component:CartComponent,
	canActivate:[AuthGuard]
}
];



@NgModule({
  declarations: [LoginComponent, ProfileComponent, CartComponent],
  imports: [
    RouterModule.forChild(routes),
  SocialLoginModule,
  CoolSocialLoginButtonsModule,
    CommonModule,
        MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule ,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule
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
  }]

})
export class DashModule { }
