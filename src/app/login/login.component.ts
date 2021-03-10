import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { FormGroup, FormControl } from '@angular/forms';
import {LocalStorageService} from 'ngx-webstorage';
import { SocialUser } from "angularx-social-login";
import {DialogService} from './../service/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    hide = true;
    fs = true;
    user: SocialUser;
	loginForm : any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  signUpForm : any = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    cpassword: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: SocialAuthService,private storage:LocalStorageService,public dia: DialogService) { }

  ngOnInit(): void {
  }


  login(): void {
     console.warn('Your order has been submitted', this.loginForm.value);
  }

  signUp(): void {
     console.warn('Your order has been submitted', this.signUpForm.value);
  }

    signInWithGoogle(): void {
     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
     this.dia.dialog.closeAll()
     this.authService.authState.subscribe((user) => { this.storage.store('user',user);});
  }


  signOut(): void {
    this.authService.signOut();
  }
}
