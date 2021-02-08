import { Component,ElementRef, OnInit, ViewChild,Renderer2 } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from "@angular/common/http";
import { StripeService } from 'ngx-stripe';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

 user: SocialUser;
  @ViewChild('drop1', {static: false}) drop: ElementRef;
  s:boolean =false;
  constructor(private http:HttpClient,private stripeService: StripeService,private authService: SocialAuthService,private storage:LocalStorageService,private renderer: Renderer2) {console.log(this.drop) }

 ngOnInit(): void {
  	this.user = this.storage.retrieve('user') as SocialUser;
  }
  k(){
  	if(this.s){
this.renderer.setStyle(this.drop.nativeElement,'display','none');
this.s = !this.s;
  	}
  	else{
  		this.renderer.setStyle(this.drop.nativeElement,'display','flex');
this.s = !this.s;
  	}
  }


  checkout(){
  	this.http.post("http://localhost:4242/create-checkout-session",{}).subscribe((res:any)=>{
  		this.stripeService.redirectToCheckout({ sessionId:res.id}).subscribe((session)=>{return session});
  	});
  }

}
