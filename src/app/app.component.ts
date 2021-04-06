import { Component, OnInit, OnDestroy ,Renderer2 } from '@angular/core';
import { Router} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatDialog} from '@angular/material/dialog';
import {LocalStorageService} from 'ngx-webstorage';
import { SocialUser } from "angularx-social-login";
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import {OverlayContainer} from '@angular/cdk/overlay';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatIconRegistry } from "@angular/material/icon";
import { HostListener } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from "@angular/platform-browser";
import { Title, Meta } from '@angular/platform-browser';

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
  pas:boolean=false;
  sub:any;
  screenHeight: number = window.innerHeight;
  screenWidth: number  = window.innerWidth;
  wide:boolean = this.screenWidth < 500;

  constructor(private overlayContainer: OverlayContainer,
    private authService: SocialAuthService,
    private router : Router,
    private render:Renderer2,
    public dia: MatDialog,
    private _snackBar: MatSnackBar,
    private storage:LocalStorageService,
    private http:HttpClient,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private titleService: Title, 
    private metaService: Meta){

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

    this.rol = (this.storage.retrieve('role')=="pa");

    this.storage.observe("role").subscribe((role)=>{
      this.rol = (role == "pa");
    })

     this.storage.observe("paid").subscribe((paid)=>{
      this.pas = (paid != "Credit");
    })

    if(this.getDeviceType() == "mobile"){
      this.openSnackBar("Supported browsers include Chrome, Firefox and Edge. In case you experience any inconvenience on the mobile site, switch to the desktop version of the site","Hide")
    }
        this.titleService.setTitle("FMC Weekend");
    this.metaService.addTags([
      {name: 'keywords', content: 'FMC, Weekend,Digtial arts festival,IIT(BHU)'},
      {name: 'description', content: 'FMC Weekend website'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ]);
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
           this.storage.store("paid",res["paid"]);
         }


       },
       (error:any)=>{console.log(error)})

   });
     
  }

  signOut():void{
    this.storage.clear('user');
    this.storage.clear("role");
    this.storage.clear("paid");
    this.authService.signOut();
    this.http
    .get("https://fmcweek-liart.vercel.app/google/logout",{withCredentials:true,responseType:"json"})
     .subscribe((res:any)=>{console.log(res)})
     window.location.reload()

  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration:100000,
    });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          this.wide = this.screenWidth < 500;
    }


  getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
}
