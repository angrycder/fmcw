import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { FormGroup, FormControl } from '@angular/forms';
import {LocalStorageService} from 'ngx-webstorage';
import { SocialUser } from "angularx-social-login";
import { Router } from "@angular/router";
import { CartComponent } from './../cart/cart.component';
import { HttpClient } from '@angular/common/http';

interface details{
  name: string;
  number : number;
  organization: string;
  year:number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    hide = true;
    fs = true;
    user: SocialUser;
      type:string;
    detail:details= {name:"",number:null,organization:null,year:null};

  constructor(private router:Router,
    private authService: SocialAuthService,
    private storage:LocalStorageService,
    private http:HttpClient) { }

  ngOnInit(): void {
  }


  login(): void {
     console.warn('Your order has been submitted');
  }

  signUp(): void {
    console.log(this.type);
     if(this.type=="ca"){
       this.ca();
     }
     if(this.type=="pa"){
       this.pa();
     }
  }


  ca():void{
    this.http.post("https://fmcweek-liart.vercel.app/registerca",this.detail,{withCredentials:true})
    .subscribe((res:any)=>{console.log(res);
     this.router.navigateByUrl("/dash/cart");
    });
  }
  pa():void{
    this.http.post("https://fmcweek-liart.vercel.app/registerpa",this.detail,{withCredentials:true})
    .subscribe((res:any)=>{console.log(res);     
     this.router.navigateByUrl("/dash/cart");});
  }
}
