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
  awppass:boolean=true;
  workshop:any;
  ren:boolean=false;
cinema: any[] = [
   {name:" Short-film Competition",
  date:"20 april 2021",
  description:"Imagine yourself to be in the shoes of a movie director, and create a short film of 3-10 minutes based on a given theme. Feel free to come up with the unique & original ideas and weave an impactful story through seamless cinematography and editing.",
  img:"./../../assets/events/cine1.jpg",
  
  pdf:"https://chat.whatsapp.com/CkXxAhuxbAY2mJz6Fvnbkx"
},
  {name:"That's how B-Roll",
  date:"20 april 2021",
  description:"Perfectly set up scenes, camera angles and surreal editing and transitions make a masterpiece that captivates viewers. “That’s how B-roll” requires you to make a B-roll portraying mundane daily activities in an exciting short clip.",
  img:"./../../assets/events/cine2.jpg",
  
  pdf:"https://chat.whatsapp.com/FBkmdDsWKTy5jaeVwUagir"
}];
   

outreach: any[] = [
     {name:" Vlogoholic",
  date:"20 april 2021",
  description:" It’s time for you to explore the vlogger inside you and create the perfect attention grabbing vlog describing any experience of your own, captivatingly, choosing any genre of your liking - travelog, prank, food review - anything that you find interesting.",
  img:"./../../assets/events/outreach2.jpg",
  club:"outreach",
  
  pdf:'https://chat.whatsapp.com/B6H9znLSbcm8DqrUxXOQwg'
},
  {name:"Documentary making",
  date:"20 april 2021",
  description:"Be it our heritage, our culture, or even our flaws, a well-structured documentary can portray it all. That’s what you’ll do in the “Documentary Making” event, where the goal is to make a 1-10 minute documentary pertaining to any particular genre",
  img:"./../../assets/events/outreach1.jpg",
  club:"outreach",
  
  pdf:'https://chat.whatsapp.com/Lm3bZg2H51FJf8QtpmyZUT'
}];


design:any[] = [  {name:"Monogram",
  date:"20 april 2021",
  description:"Sometimes, all it takes is two letters and an artistic mind to tell a story which words can’t. If you agree, “Monogram” is just the right place for you !!! Create a visually impactful and aesthetically pleasing design with none other than the initials of your name",
  img:"./../../assets/events/design2.jpg",
  club:'design',
  
  pdf:"https://chat.whatsapp.com/IISQdmBzjms4v4ovVPoAUM"
},
  {name:"Comic Strip",
  date:"20 april 2021",
  description:"Awaken the artist inside you and let the creativity flow as “Comic Strip” provides you with the opportunity to put together a story through the little panels of comics. Pick one of the provided prompts to base your comic upon, and make it stand out.",
  img:"./../../assets/events/design1.jpg",
  club:'design',
  
  pdf:"https://chat.whatsapp.com/KyXLOLRdfEVAoENa4pUDpW"
}];


media:any[]=[{name:"Netflix & Chill",
  date:"20 april 2021",
  description:"Consider yourself a web series geek? “Netflix and Chill” is here for you. Use a stipulated budget to assemble a cast consisting of fan-favorite heroes to the most terrifying of villains from shows around the world, and weave a gripping plot of your own.",
  img:"./../../assets/events/media1.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/JRThNiACDwzEaWneiRrqHf"
},
{name:"Nation wants to know",
  date:"20 april 2021",
  description:"“Nation wants to know” provides you the platform to prove your mettle in the field of journalism. You’ll be provided with 3 images, based on which you’ll have to create the perfect piece of news, with a catchy headline and a well-constructed series of events.",
  img:"./../../assets/events/media2.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/IslRVpriwaHIgGnbJB8W5c"
}
];

animation:any[]=[
{name:"UnReal",
  date:"20 april 2021",
  description:"Put your animation skills to test as participants will be required to recreate, to the best of their abilities, the 3D render of a real image which would be provided to them. The closest resembling entry takes it all!!!<br><br>",
  img:"./../../assets/events/animation1.jpg",
  club:"media",
  
    pdf:"https://chat.whatsapp.com/KaEIg9DQvXGGyak6vV0bIg"
},
{name:"Capture the Imagination",
  date:"20 april 2021",
  description:"Set free the wings of your creativity, as “Capture the imagination” enables you to showcase an imaginative creation of the world in the form of 3D models using your animation skills.<br><br>",
  img:"./../../assets/events/animation2.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/CviRlijF2H128C2vmOBuw1"
}];


photog:any[] = [
{name:"InFocus",
  date:"20 april 2021",
  description:"Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them.<br><br>",
  img:"./../../assets/events/photog1.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/EkLSyvPaVdd3kH8ZhjPIkY"
},
{name:"Photoart",
  date:"20 april 2021",
  description:"“Photoart” provides you with a platform to compete with highly skilled photographers. Given a set of 15 photographs, you will be creating an image using any number of the provided photographs, using manipulation.<br><br>",
  img:"./../../assets/events/photog2.jpg",
  club:"media",
  
  pdf:'https://chat.whatsapp.com/LQ9PF9V0Fii7N5068HvTQ7'
}
];

etn: any = {
  "Short-film making Competition" :{name:" Short-film Competition",
  date:"20 april 2021",
  description:"Imagine yourself to be in the shoes of a movie director, and create a short film of 3-10 minutes based on a given theme. Feel free to come up with the unique & original ideas and weave an impactful story through seamless cinematography and editing.",
  img:"./../../assets/events/cine1.jpg",
  
  pdf:"https://chat.whatsapp.com/CkXxAhuxbAY2mJz6Fvnbkx"
},
 "That's how B-Roll": {name:"That's how B-Roll",
  date:"20 april 2021",
  description:"Perfectly set up scenes, camera angles and surreal editing and transitions make a masterpiece that captivates viewers. “That’s how B-roll” requires you to make a B-roll portraying mundane daily activities in an exciting short clip.",
  img:"./../../assets/events/cine2.jpg",
  
  pdf:"https://chat.whatsapp.com/FBkmdDsWKTy5jaeVwUagir"
},
   "Vlogoholic":{name:" Vlogoholic",
  date:"20 april 2021",
  description:" It’s time for you to explore the vlogger inside you and create the perfect attention grabbing vlog describing any experience of your own, captivatingly, choosing any genre of your liking - travelog, prank, food review - anything that you find interesting.",
  img:"./../../assets/events/outreach2.jpg",
  club:"outreach",
  
  pdf:"https://chat.whatsapp.com/B6H9znLSbcm8DqrUxXOQwg"
},
 "Documentary making": {name:"Documentary making",
  date:"20 april 2021",
  description:"Be it our heritage, our culture, or even our flaws, a well-structured documentary can portray it all. That’s what you’ll do in the “Documentary Making” event, where the goal is to make a 1-10 minute documentary pertaining to any particular genre",
  img:"./../../assets/events/outreach1.jpg",
  club:"outreach",
  
  pdf:"https://chat.whatsapp.com/Lm3bZg2H51FJf8QtpmyZUT"
},
"Monogram":{name:"Monogram",
  date:"20 april 2021",
  description:"Sometimes, all it takes is two letters and an artistic mind to tell a story which words can’t. If you agree, “Monogram” is just the right place for you !!! Create a visually impactful and aesthetically pleasing design with none other than the initials of your name",
  img:"./../../assets/events/design2.jpg",
  club:'design',
  
  pdf:"https://chat.whatsapp.com/IISQdmBzjms4v4ovVPoAUM"
},
  "Comic Strip":{name:"Comic Strip",
  date:"20 april 2021",
  description:"Awaken the artist inside you and let the creativity flow as “Comic Strip” provides you with the opportunity to put together a story through the little panels of comics. Pick one of the provided prompts to base your comic upon, and make it stand out.",
  img:"./../../assets/events/design1.jpg",
  club:'design',
  
  pdf:"https://chat.whatsapp.com/KyXLOLRdfEVAoENa4pUDpW"
},
"Netflix & Chill":{name:"Netflix & Chill",
  date:"20 april 2021",
  description:"Consider yourself a web series geek? “Netflix and Chill” is here for you. Use a stipulated budget to assemble a cast consisting of fan-favorite heroes to the most terrifying of villains from shows around the world, and weave a gripping plot of your own.",
  img:"./../../assets/events/media1.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/JRThNiACDwzEaWneiRrqHf"
},
"Nation wants to know":{name:"Nation wants to know",
  date:"20 april 2021",
  description:"“Nation wants to know” provides you the platform to prove your mettle in the field of journalism. You’ll be provided with 3 images, based on which you’ll have to create the perfect piece of news, with a catchy headline and a well-constructed series of events.",
  img:"./../../assets/events/media2.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/IslRVpriwaHIgGnbJB8W5c"
},
"UnReal":{name:"UnReal",
  date:"20 april 2021",
  description:"Put your animation skills to test as participants will be required to recreate, to the best of their abilities, the 3D render of a real image which would be provided to them. The closest resembling entry takes it all!!!<br><br>",
  img:"./../../assets/events/animation1.jpg",
  club:"media",
  
    pdf:"https://chat.whatsapp.com/KaEIg9DQvXGGyak6vV0bIg"
},
"Capture the Imagination":{name:"Capture the Imagination",
  date:"20 april 2021",
  description:"Set free the wings of your creativity, as “Capture the imagination” enables you to showcase an imaginative creation of the world in the form of 3D models using your animation skills.<br><br><br>",
  img:"./../../assets/events/animation2.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/CviRlijF2H128C2vmOBuw1"
},
"InFocus":{name:"InFocus",
  date:"20 april 2021",
  description:"Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them.<br><br>",
  img:"./../../assets/events/photog1.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/EkLSyvPaVdd3kH8ZhjPIkY"
},
"Photoart":{name:"Photoart",
  date:"20 april 2021",
  description:"“Photoart” provides you with a platform to compete with highly skilled photographers. Given a set of 15 photographs, you will be creating an image using any number of the provided photographs, using manipulation.<br><br>",
  img:"./../../assets/events/photog2.jpg",
  club:"media",
  
  pdf:'https://chat.whatsapp.com/LQ9PF9V0Fii7N5068HvTQ7'
}};

change:any= {"Animation":this.animation,"Media":this.media,"Design":this.design,"Outreach":this.outreach,"Cinema":this.cinema,"Photography":this.photog}
  events: any[] = [
   {name:" Short-film Competition",
  date:"20 april 2021",
  description:"Imagine yourself to be in the shoes of a movie director, and create a short film of 3-10 minutes based on a given theme. Feel free to come up with the unique & original ideas and weave an impactful story through seamless cinematography and editing.",
  img:"./../../assets/events/cine1.jpg",
  
  pdf:"https://chat.whatsapp.com/CkXxAhuxbAY2mJz6Fvnbkx"
},
  {name:"That's how B-Roll",
  date:"20 april 2021",
  description:"Perfectly set up scenes, camera angles and surreal editing and transitions make a masterpiece that captivates viewers. “That’s how B-roll” requires you to make a B-roll portraying mundane daily activities in an exciting short clip.",
  img:"./../../assets/events/cine2.jpg",
  
  pdf:"https://chat.whatsapp.com/FBkmdDsWKTy5jaeVwUagir"
},
     {name:" Vlogoholic",
  date:"20 april 2021",
  description:" It’s time for you to explore the vlogger inside you and create the perfect attention grabbing vlog describing any experience of your own, captivatingly, choosing any genre of your liking - travelog, prank, food review - anything that you find interesting.",
  img:"./../../assets/events/outreach2.jpg",
  club:"outreach",
  
  pdf:"https://chat.whatsapp.com/B6H9znLSbcm8DqrUxXOQwg"
},
  {name:"Documentary making",
  date:"20 april 2021",
  description:"Be it our heritage, our culture, or even our flaws, a well-structured documentary can portray it all. That’s what you’ll do in the “Documentary Making” event, where the goal is to make a 1-10 minute documentary pertaining to any particular genre",
  img:"./../../assets/events/outreach1.jpg",
  club:"outreach",
  
  pdf:"https://chat.whatsapp.com/Lm3bZg2H51FJf8QtpmyZUT"
},
{name:"Monogram",
  date:"20 april 2021",
  description:"Sometimes, all it takes is two letters and an artistic mind to tell a story which words can’t. If you agree, “Monogram” is just the right place for you !!! Create a visually impactful and aesthetically pleasing design with none other than the initials of your name",
  img:"./../../assets/events/design2.jpg",
  club:'design',
  
  pdf:"https://chat.whatsapp.com/IISQdmBzjms4v4ovVPoAUM"
},
  {name:"Comic Strip",
  date:"20 april 2021",
  description:"Awaken the artist inside you and let the creativity flow as “Comic Strip” provides you with the opportunity to put together a story through the little panels of comics. Pick one of the provided prompts to base your comic upon, and make it stand out.",
  img:"./../../assets/events/design1.jpg",
  club:'design',
  
  pdf:"https://chat.whatsapp.com/KyXLOLRdfEVAoENa4pUDpW"
},
{name:"Netflix & Chill",
  date:"20 april 2021",
  description:"Consider yourself a web series geek? “Netflix and Chill” is here for you. Use a stipulated budget to assemble a cast consisting of fan-favorite heroes to the most terrifying of villains from shows around the world, and weave a gripping plot of your own.",
  img:"./../../assets/events/media1.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/JRThNiACDwzEaWneiRrqHf"
},
{name:"Nation wants to know",
  date:"20 april 2021",
  description:"“Nation wants to know” provides you the platform to prove your mettle in the field of journalism. You’ll be provided with 3 images, based on which you’ll have to create the perfect piece of news, with a catchy headline and a well-constructed series of events.",
  img:"./../../assets/events/media2.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/IslRVpriwaHIgGnbJB8W5c"
},
{name:"UnReal",
  date:"20 april 2021",
  description:"Put your animation skills to test as participants will be required to recreate, to the best of their abilities, the 3D render of a real image which would be provided to them. The closest resembling entry takes it all!!!<br><br>",
  img:"./../../assets/events/animation1.jpg",
  club:"media",
  
    pdf:"https://chat.whatsapp.com/KaEIg9DQvXGGyak6vV0bIg"
},
{name:"Capture the Imagination",
  date:"20 april 2021",
  description:"Set free the wings of your creativity, as “Capture the imagination” enables you to showcase an imaginative creation of the world in the form of 3D models using your animation skills.<br><br><br>",
  img:"./../../assets/events/animation2.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/CviRlijF2H128C2vmOBuw1"
},
{name:"InFocus",
  date:"20 april 2021",
  description:"Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them.<br><br>",
  img:"./../../assets/events/photog1.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/EkLSyvPaVdd3kH8ZhjPIkY"
},
{name:"Photoart",
  date:"20 april 2021",
  description:"“Photoart” provides you with a platform to compete with highly skilled photographers. Given a set of 15 photographs, you will be creating an image using any number of the provided photographs, using manipulation.<br><br>",
  img:"./../../assets/events/photog2.jpg",
  club:"media",
  
  pdf:"https://chat.whatsapp.com/LQ9PF9V0Fii7N5068HvTQ7"
}];

  work: any[] = [
   {name:"Owen Davey",
  date:"20 april 2021",
  description:"An award-winning illustrator who specializes in creating retro-inspired illustrations and has got his work published worldwide. His clients include Google, Facebook, Sony, Lego and National Geographic. Winner of Best of Show and two Silver Awards in the 3x3 Professional Show 2019.",
  img:"../../assets/workshop/workshop_owen.jpg"
},
  {name:"Ashraful Arefin",
  date:"20 april 2021",
  description:"A Fine Art Photographer, with an allure towards photography since 2013, highly inspired by the still life and tries to portray beauty and emotion within his photographic frame by using amazing colours and simple techniques.",
 img:"../../assets/workshop/workshop_ashraful.jpg"
},
{name:"V. Srinivas Mohan",
  date:"20 april 2021",
  description:"A visual effects artist working in the Indian film indutsry since 1996. He has contributed to the blockbusters like Bahubali: The Beginning; Ra.One; Enthiran and many moreand has received four National Film Awards for Best Special Effects.",
 img:"../../assets/workshop/workshop_sinivas.jpg"
},
{name:"Akanksha Damini Joshi",
  date:"20 april 2021",
  description:"An Indian filmmaker known for her works on communal conflict, crisis and spiritual philosophy. Her documentaries, Chilika Bank$, Hindu Nectar, and Earth Witness won her various awards including the Best Film and the Best Director awards at both National, and International level.",
  img:"../../assets/workshop/workshop_akanksha.jpg"
},
{name:"Aarzoo Khurana",
  date:"20 april 2021",
  description:"A nature and wildlife photographer, currently the ambassador at Sony Alpha. She strives to find beauty in the light and shadows, portraying some of the most engaging moments one might witness in the wild. ",
  img:"../../assets/workshop/workshop_aarzoo.jpg"
},
{name:"RITAM BHATNAGAR",
  date:"20 april 2021",
  description:"Founder of India Film Project, Asia's largest content festival.He is also a recipient of the title of “Global Shaper” by the World Economic Forum.",
  img:"../../assets/workshop/workshop_ritam.jpg"
},
{name:"MOHAMMED ZEESHAN ",
  date:"20 april 2021",
  description:"Founder of Rangreza Studios, a premium media services brand. He is a master of a wide array of professional cameras and lenses. As one of the prominent travellers and photographers in the community, he has inspired many to explore the world of photography.",
  img:"../../assets/workshop/workshop_zeeshan.jpg"
},
{name:"Rohit Dawesar",
  date:"20 april 2021",
  description:"An Indore based author whose debut novel 'The Stupid Somebody' proclaimed him the title of best-selling author, even before signing for his very second book in 2020. Best known for his nanotales, he now creates magic with his words as a full-time writer.",
  img:"../../assets/workshop/workshop_rohit.jpg"
}]

ca: boolean = false;
np:boolean = false;

  constructor(private router:Router,private authService: SocialAuthService,
    private storage:LocalStorageService,private http:HttpClient,
    @Inject(DOCUMENT) private document: Document) {
       this.user = this.storage.retrieve('user');
      this.loggedIn=(this.user != null);

    this.storage.observe("user").subscribe((user)=>{
      this.user = user;
      this.loggedIn=(user != null);
    });;
  }

  ngOnInit(): void {
    this.document.body.className = "bgp";
    this.http.post("https://fmcweek-liart.vercel.app/dashboard/details",{token: this.user.idToken},{withCredentials:true})
    .subscribe((res:any)=>{
        if(res["message"] == "notoken"){
          this.signOut();
        }
        else{
          if(res["type"]=="PA"){
            this.ca = true;
          if(res["pass"]=="aep"){
            this.dets = res;
            this.event = this.events;
            this.workshop = this.work;
          }
          else if(res["pass"]=="dep"){
            this.event = this.change[res["add"]];
            this.workshop = this.work[0];
            this.dets = res;
          }
          else if(res["pass"]=="sep"){
            this.event = this.etn[res["add"]];
            this.workshop = this.work[0];

            this.dets = res;
          }
          else if(res["pass"]=="awp"){
            
            this.workshop = this.work[0];

            this.awppass =false;

            this.dets = res;
          }
          else{
          this.np = true; 
          }
        }
        if(res["type"]=="CA"){
          this.ca = false;
          this.dets = res;
        }
          if(res["type"]=="IN"){
            this.dets = res;
            this.ca = true;
          }
        if(res["type"]=="PA"){
          this.dets = res;

        }
          console.log(res)
          this.ren = !this.ren;
        }

       
    },(error)=>{this.signOut()});
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
    this.storage.clear("role");
    this.authService.signOut();
    this.http
    .get("https://fmcweek-liart.vercel.app/google/logout",{withCredentials:true,responseType:"json"})
     .subscribe((res:any)=>{console.log(res)});
       window.location.reload();
  }

  join(l:any):void{
    console.log(l)
    window.location.href = l.pdf;
  }

  gotowork(){
   window.location.href= "https://chat.whatsapp.com/FgwktoDsvDz6PNuj2KWY9q"
  }
}
