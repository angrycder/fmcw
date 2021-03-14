import { Component,ElementRef, OnInit, OnDestroy ,ViewChild,Renderer2 } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { Router} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogService} from './service/dialog.service';
import {LocalStorageService} from 'ngx-webstorage';
import { SocialUser } from "angularx-social-login";
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import {OverlayContainer} from '@angular/cdk/overlay';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'fmc weekend';
  user: SocialUser;
  loggedIn :boolean;
  sub:any;
  screenHeight: number = window.innerHeight;
  screenWidth: number  = window.innerWidth;
  wide:boolean = this.screenWidth < 500;

  constructor(private overlayContainer: OverlayContainer,private authService: SocialAuthService,private router : Router,private render:Renderer2,public dia: DialogService,private storage:LocalStorageService){
      this.user = this.storage.retrieve('user');
      this.loggedIn=(this.user != null);

    this.storage.observe("user").subscribe((user)=>{
      this.user = user;
      this.loggedIn=(user != null);
    })
   }


  ngOnInit() {
      }
  ngOnDestroy(){
      }


  pop_up_login():void{
    const dialogRef = this.dia.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {    });

  }

  pop_up_payment():void{
    const dialogRef = this.dia.dialog.open(CartComponent);

    dialogRef.afterClosed().subscribe(result => {    });
  }

 logout():void {
   this.authService.signOut();
   this.storage.clear('user');
   let currentUrl = this.router.url;
   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/']);
    });
   this.user = undefined;
 }

  signInWithGoogle(): void {
     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
     this.dia.dialog.closeAll()
     this.authService.authState.subscribe((user) => { this.storage.store('user',user);this.pop_up_login();});
     
  }

  signOut():void{
    this.storage.clear('user');
    this.authService.signOut();
  }
  

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          this.wide = this.screenWidth < 500;
    }
}
