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
  dets:any;
  i:number=0;
  j:number=0;
  event:any;
  workshop:any;
  ren:boolean=false;
cinema: any[] = [
   {name:" Short-film Competition",
  date:"20 april 2021",
  description:"Imagine yourself to be in the shoes of a movie director, and create a short film of 3-10 minutes based on a given theme. Feel free to come up with the unique & original ideas and weave an impactful story through seamless cinematography and editing.",
  img:"./../../assets/events/cine1.jpg",
  price:5000,
  pdf:'/assets/ps/short_film_making.pdf'
},
  {name:"That's how B-Roll",
  date:"20 april 2021",
  description:"Perfectly set up scenes, camera angles and surreal editing and transitions make a masterpiece that captivates viewers. “That’s how B-roll” requires you to make a B-roll portraying mundane daily activities in an exciting short clip.",
  img:"./../../assets/events/cine2.jpg",
  price:5000,
  pdf:"/assets/ps/that_how_b_roll.pdf"
}];
   

outreach: any[] = [
     {name:" Vlogoholic",
  date:"20 april 2021",
  description:" It’s time for you to explore the vlogger inside you and create the perfect attention grabbing vlog describing any experience of your own, captivatingly, choosing any genre of your liking - travelog, prank, food review - anything that you find interesting.",
  img:"./../../assets/events/outreach2.jpg",
  club:"outreach",
  price:5000,
  pdf:'/assets/ps/vlogoholic.pdf'
},
  {name:"Documentary making",
  date:"20 april 2021",
  description:"Be it our heritage, our culture, or even our flaws, a well-structured documentary can portray it all. That’s what you’ll do in the “Documentary Making” event, where the goal is to make a 1-10 minute documentary pertaining to any particular genre",
  img:"./../../assets/events/outreach1.jpg",
  club:"outreach",
  price:5000,
  pdf:'/assets/ps/documentary_making.pdf'
}];


design:any[] = [  {name:"Monogram",
  date:"20 april 2021",
  description:"Sometimes, all it takes is two letters and an artistic mind to tell a story which words can’t. If you agree, “Monogram” is just the right place for you !!! Create a visually impactful and aesthetically pleasing design with none other than the initials of your name",
  img:"./../../assets/events/design2.jpg",
  club:'design',
  price:5000,
  pdf:'/assets/ps/monogram.pdf'
},
  {name:"Comic Strip",
  date:"20 april 2021",
  description:"Awaken the artist inside you and let the creativity flow as “Comic Strip” provides you with the opportunity to put together a story through the little panels of comics. Pick one of the provided prompts to base your comic upon, and make it stand out.",
  img:"./../../assets/events/design1.jpg",
  club:'design',
  price:5000,
  pdf:'/assets/ps/comic_strip.pdf'
}];


media:any[]=[{name:"Netflix & Chill",
  date:"20 april 2021",
  description:"Consider yourself a web series geek? “Netflix and Chill” is here for you. Use a stipulated budget to assemble a cast consisting of fan-favorite heroes to the most terrifying of villains from shows around the world, and weave a gripping plot of your own.",
  img:"./../../assets/events/media1.jpg",
  club:"media",
  price:5000,
  pdf:'/assets/ps/netflix_and_chill.pdf'
},
{name:"Nation wants to know",
  date:"20 april 2021",
  description:"“Nation wants to know” provides you the platform to prove your mettle in the field of journalism. You’ll be provided with 3 images, based on which you’ll have to create the perfect piece of news, with a catchy headline and a well-constructed series of events.",
  img:"./../../assets/events/media2.jpg",
  club:"media",
  price:5000,
  pdf:'/assets/ps/nation_wants_to_know.pdf'
}
];

animation:any[]=[
{name:"UnReal",
  date:"20 april 2021",
  description:"Put your animation skills to test as participants will be required to recreate, to the best of their abilities, the 3D render of a real image which would be provided to them. The closest resembling entry takes it all!!!<br><br>",
  img:"./../../assets/events/animation1.jpg",
  club:"media",
  price:5000,
    pdf:'/assets/ps/unreal.pdf'
},
{name:"Capture the Imagination",
  date:"20 april 2021",
  description:"Set free the wings of your creativity, as “Capture the imagination” enables you to showcase an imaginative creation of the world in the form of 3D models using your animation skills.<br><br>",
  img:"./../../assets/events/animation2.jpg",
  club:"media",
  price:5000,
  pdf:'/assets/ps/capture_the_imagination.pdf'
}];


photog:any[] = [
{name:"InFocus",
  date:"20 april 2021",
  description:"Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them.<br><br>",
  img:"./../../assets/events/photog1.jpg",
  club:"media",
  price:5000,
  pdf:'/assets/ps/infocus.pdf'
},
{name:"Photoart",
  date:"20 april 2021",
  description:"“Photoart” provides you with a platform to compete with highly skilled photographers. Given a set of 15 photographs, you will be creating an image using any number of the provided photographs, using manipulation.<br><br>",
  img:"./../../assets/events/photog2.jpg",
  club:"media",
  price:5000,
  pdf:'/assets/ps/photoart.pdf'
}
];


change:any= {"Animation":this.animation,"Media":this.media,"Design":this.design,"Outreach":this.outreach,"Cinema":this.cinema,"Photography":this.photog}
  events: any[] = [
   {name:" Short-film Competition",
  date:"20 april 2021",
  description:"Imagine yourself to be in the shoes of a movie director, and create a short film of 3-10 minutes based on a given theme. Feel free to come up with the unique & original ideas and weave an impactful story through seamless cinematography and editing.",
  img:"./../../assets/events/cine1.jpg",
  price:5000,
  pdf:'/assets/ps/short_film_making.pdf'
},
  {name:"That's how B-Roll",
  date:"20 april 2021",
  description:"Perfectly set up scenes, camera angles and surreal editing and transitions make a masterpiece that captivates viewers. “That’s how B-roll” requires you to make a B-roll portraying mundane daily activities in an exciting short clip.",
  img:"./../../assets/events/cine2.jpg",
  price:5000,
  pdf:"/assets/ps/that_how_b_roll.pdf"
},
     {name:" Vlogoholic",
  date:"20 april 2021",
  description:" It’s time for you to explore the vlogger inside you and create the perfect attention grabbing vlog describing any experience of your own, captivatingly, choosing any genre of your liking - travelog, prank, food review - anything that you find interesting.",
  img:"./../../assets/events/outreach2.jpg",
  club:"outreach",
  price:5000,
  pdf:'/assets/ps/vlogoholic.pdf'
},
  {name:"Documentary making",
  date:"20 april 2021",
  description:"Be it our heritage, our culture, or even our flaws, a well-structured documentary can portray it all. That’s what you’ll do in the “Documentary Making” event, where the goal is to make a 1-10 minute documentary pertaining to any particular genre",
  img:"./../../assets/events/outreach1.jpg",
  club:"outreach",
  price:5000,
  pdf:'/assets/ps/documentary_making.pdf'
},
{name:"Monogram",
  date:"20 april 2021",
  description:"Sometimes, all it takes is two letters and an artistic mind to tell a story which words can’t. If you agree, “Monogram” is just the right place for you !!! Create a visually impactful and aesthetically pleasing design with none other than the initials of your name",
  img:"./../../assets/events/design2.jpg",
  club:'design',
  price:5000,
  pdf:'/assets/ps/monogram.pdf'
},
  {name:"Comic Strip",
  date:"20 april 2021",
  description:"Awaken the artist inside you and let the creativity flow as “Comic Strip” provides you with the opportunity to put together a story through the little panels of comics. Pick one of the provided prompts to base your comic upon, and make it stand out.",
  img:"./../../assets/events/design1.jpg",
  club:'design',
  price:5000,
  pdf:'/assets/ps/comic_strip.pdf'
},
{name:"Netflix & Chill",
  date:"20 april 2021",
  description:"Consider yourself a web series geek? “Netflix and Chill” is here for you. Use a stipulated budget to assemble a cast consisting of fan-favorite heroes to the most terrifying of villains from shows around the world, and weave a gripping plot of your own.",
  img:"./../../assets/events/media1.jpg",
  club:"media",
  price:5000,
  pdf:'/assets/ps/netflix_and_chill.pdf'
},
{name:"Nation wants to know",
  date:"20 april 2021",
  description:"“Nation wants to know” provides you the platform to prove your mettle in the field of journalism. You’ll be provided with 3 images, based on which you’ll have to create the perfect piece of news, with a catchy headline and a well-constructed series of events.",
  img:"./../../assets/events/media2.jpg",
  club:"media",
  price:5000,
  pdf:'/assets/ps/nation_wants_to_know.pdf'
},
{name:"UnReal",
  date:"20 april 2021",
  description:"Put your animation skills to test as participants will be required to recreate, to the best of their abilities, the 3D render of a real image which would be provided to them. The closest resembling entry takes it all!!!<br><br>",
  img:"./../../assets/events/animation1.jpg",
  club:"media",
  price:5000,
    pdf:'/assets/ps/unreal.pdf'
},
{name:"Capture the Imagination",
  date:"20 april 2021",
  description:"Set free the wings of your creativity, as “Capture the imagination” enables you to showcase an imaginative creation of the world in the form of 3D models using your animation skills.<br><br><br>",
  img:"./../../assets/events/animation2.jpg",
  club:"media",
  price:5000,
  pdf:'/assets/ps/capture_the_imagination.pdf'
},
{name:"InFocus",
  date:"20 april 2021",
  description:"Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them.<br><br>",
  img:"./../../assets/events/photog1.jpg",
  club:"media",
  price:5000,
  pdf:'/assets/ps/infocus.pdf'
},
{name:"Photoart",
  date:"20 april 2021",
  description:"“Photoart” provides you with a platform to compete with highly skilled photographers. Given a set of 15 photographs, you will be creating an image using any number of the provided photographs, using manipulation.<br><br>",
  img:"./../../assets/events/photog2.jpg",
  club:"media",
  price:5000,
  pdf:'/assets/ps/photoart.pdf'
}];

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
          if(res["pass"]=="aep"){
            this.dets = res;
          }
          if(res["pass"]=="dep"){
            this.dets = this.change[res["add"]];
          }
          if(res["pass"]=="sep"){
            this.dets = this.change[res["add"]];
          }
          if(res["type"]=="IN"){
            this.dets = res;
          }
          console.log(res)
          this.ren = !this.ren;
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
