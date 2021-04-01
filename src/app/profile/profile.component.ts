import { Component,ElementRef, OnInit,OnDestroy, ViewChild,Renderer2,Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import { SocialUser } from "angularx-social-login";
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import {OverlayContainer} from '@angular/cdk/overlay';
import { HostListener } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit,OnDestroy {
  user: SocialUser;
  loggedIn :boolean;
  event:any;
  dets:any;
  i:number=0;
  j:number=0;
  workshop:any;
  events: any[] = [
   {name:" Short-film Competition",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  price:5000
},
  {name:"That's how B-Roll",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  price:5000
}]

  work: any[] = [
   {name:" Short-film Competition",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  price:5000
},
  {name:"That's how B-Roll",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  price:5000
}]




  constructor(private router:Router,private authService: SocialAuthService,
    private storage:LocalStorageService,private http:HttpClient,
    @Inject(DOCUMENT) private document: Document) {
       this.user = this.storage.retrieve('user');
      this.loggedIn=(this.user != null);

    this.storage.observe("user").subscribe((user)=>{
      this.user = user;
      this.loggedIn=(user != null);
    });;
    this.event = this.events[0];
    this.workshop = this.work[0]
  }

  ngOnInit(): void {
    this.document.body.className = "bgp";
    this.http.post("https://fmcweek-liart.vercel.app/dashboard/details",{token: this.user.idToken},{withCredentials:true})
    .subscribe((res:any)=>{
        if(res["message"] == "notoken"){
          this.signOut();
        }
        else{
          this.dets = res;
          console.log(res)
        }
    });
  }

  ngOnDestroy(): void {
    this.document.body.className = "";
  }

  left(): void {
    let l = this.events.length;
    this.event = this.events[(this.i-1+l)%l];
    this.i = (this.i-1+l)%l;
  }
  right(): void {
    let l = this.events.length;
    this.event = this.events[(this.i+1)%l];
    this.i = (this.i+1)%l;
  }

  l(){
     let l = this.work.length;
    this.workshop = this.work[(this.j-1+l)%l];
    this.j = (this.j-1+l)%l;
  }
  r(){
    let l = this.work.length;
    this.workshop = this.work[(this.j+1)%l];
    this.j = (this.j+1)%l;
  }

    signOut():void{
    this.storage.clear('user');
    this.authService.signOut();
    this.http
    .get("https://fmcweek-liart.vercel.app/google/logout",{withCredentials:true,responseType:"json"})
     .subscribe((res:any)=>{console.log(res)});
       window.location.reload();
  }
}
