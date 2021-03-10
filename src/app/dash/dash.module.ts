import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { CartComponent } from '../cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
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
	path:"cart",
	component:CartComponent,
	canActivate:[AuthGuard]
}
];



@NgModule({
  declarations: [LoginComponent, ProfileComponent, CartComponent],
  imports: [
    RouterModule.forChild(routes),
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
    providers: []

})
export class DashModule { }
