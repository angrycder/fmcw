import { Component,ElementRef, OnInit,OnDestroy, ViewChild,Renderer2,Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import { SocialUser } from "angularx-social-login";
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import {OverlayContainer} from '@angular/cdk/overlay';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit,OnDestroy {
  user: SocialUser;
  loggedIn :boolean;
  event:any;
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




  constructor(private authService: SocialAuthService,
    private storage:LocalStorageService,
    private renderer: Renderer2,
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

}
