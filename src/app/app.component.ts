import { Component,ElementRef, OnInit, OnDestroy ,ViewChild,Renderer2 } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { Router} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import {MatDialog} from '@angular/material/dialog';
import {LocalStorageService} from 'ngx-webstorage';
import { SocialUser } from "angularx-social-login";
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import {OverlayContainer} from '@angular/cdk/overlay';
import { MatIconRegistry } from "@angular/material/icon";
import { HostListener } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'fmc weekend';
  user: SocialUser;
  loggedIn :boolean;
  rol:boolean = false;
  sub:any;
  screenHeight: number = window.innerHeight;
  screenWidth: number  = window.innerWidth;
  wide:boolean = this.screenWidth < 500;

  constructor(private overlayContainer: OverlayContainer,
    private authService: SocialAuthService,
    private router : Router,
    private render:Renderer2,
    public dia: MatDialog,
    private storage:LocalStorageService,
    private http:HttpClient,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){

    this.matIconRegistry.addSvgIcon(
      "refer",
       this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/refer.svg")
    );
      this.user = this.storage.retrieve('user');
      this.loggedIn=(this.user != null);

    this.storage.observe("user").subscribe((user)=>{
      this.user = user;
      this.loggedIn=(user != null);
    })

    this.storage.observe("role").subscribe((role)=>{
      this.rol = (role == "pa");
    })
   }


  ngOnInit() {
      }
  ngOnDestroy(){
      }

  pop_up(s:string):void{

  }
  pop_up_login(x:any):void{
    const dialogRef = this.dia.open(LoginComponent,{width:"100vw",height:"100vh",data:{user:x}});

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
     this.dia.closeAll()
     this.authService.authState.subscribe((user:SocialUser) => { 
       this.http
       .post("https://fmcweek-liart.vercel.app/google/login",{"token":user.idToken},{withCredentials:true,responseType:"json"})
       .subscribe((res:any)=>{console.log(res)
         if(res["message"] == "nodetail"){
           this.pop_up_login(user);
         }
         if(res["message"] == "insti"){
           this.storage.store("user",user);
           this.storage.store("role",res["message"])
         }
         if(res["message"] == "ca"){
           this.storage.store("user",user);
           this.storage.store("role",res["message"]);
         }
         if(res["message"] == "pa"){
           this.storage.store("user",user);
           this.storage.store("role",res["message"]);
         }


       },
       (error:any)=>{console.log(error)})

   });
     
  }

  signOut():void{
    this.storage.clear('user');
    this.storage.clear("role");
    this.authService.signOut();
    this.http
    .get("https://fmcweek-liart.vercel.app/google/logout",{withCredentials:true,responseType:"json"})
     .subscribe((res:any)=>{console.log(res)})
     window.location.reload()
  }
  

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          this.wide = this.screenWidth < 500;
    }
}
