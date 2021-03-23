import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { FormGroup, FormControl } from '@angular/forms';
import {LocalStorageService} from 'ngx-webstorage';
import { SocialUser } from "angularx-social-login";
import {DialogService} from './../service/dialog.service';
import { Router } from "@angular/router";
import { CartComponent } from './../cart/cart.component';

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
    phone: new FormControl(''),
    org:new FormControl(''),
  });

  constructor(private router:Router,private authService: SocialAuthService,private storage:LocalStorageService,public dia: DialogService) { }

  ngOnInit(): void {
  }


  login(): void {
     console.warn('Your order has been submitted', this.loginForm.value);
  }

  signUp(): void {
     console.warn('Your order has been submitted', this.signUpForm.value);
     this.dia.dialog.closeAll();
     this.router.navigateByUrl("/dash/cart");
  }

    pop_up_cart():void{
    const dialogRef = this.dia.dialog.open(CartComponent,{width:"100%",height:"100%"});

    dialogRef.afterClosed().subscribe(result => {    });

  }

}
