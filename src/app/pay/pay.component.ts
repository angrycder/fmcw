import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  pdf : boolean = false;
	title: any;
   cinema: any[] = [
   {name:" Short-film Competition",
  date:"20 april 2021",
  description:"Imagine yourself to be in the shoes of a movie director, and create a short film of 3-10 minutes based on a given theme. Feel free to come up with the unique & original ideas and weave an impactful story through seamless cinematography and editing.",
  img:"./../../assets/events/cine2.png",
  price:5000
},
  {name:"That's how B-Roll",
  date:"20 april 2021",
  description:"Perfectly set up scenes, camera angles and surreal editing and transitions make a masterpiece that captivates viewers. “That’s how B-roll” requires you to make a B-roll portraying mundane daily activities in an exciting short clip.",
  img:"./../../assets/events/cine1.png",
  price:5000
}];
   outreach: any[] = [
     {name:" Vlogoholic",
  date:"20 april 2021",
  description:" It’s time for you to explore the vlogger inside you and create the perfect attention grabbing vlog describing any experience of your own, captivatingly, choosing any genre of your liking - travelog, prank, food review - anything that you find interesting.",
  img:"./../../assets/events/outreach2.png",
  club:"outreach",
  price:5000
},
  {name:"Documentary making",
  date:"20 april 2021",
  description:"Be it our heritage, our culture, or even our flaws, a well-structured documentary can portray it all. That’s what you’ll do in the “Documentary Making” event, where the goal is to make a 1-10 minute documentary pertaining to any particular genre",
  img:"./../../assets/events/outreach1.png",
  club:"outreach",
  price:5000
}];
    design:any[] = [  {name:"Monogram",
  date:"20 april 2021",
  description:"Sometimes, all it takes is two letters and an artistic mind to tell a story which words can’t. If you agree, “Monogram” is just the right place for you !!! Create a visually impactful and aesthetically pleasing design with none other than the initials of your name",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:'design',
  price:5000
},
  {name:"Comic Strip",
  date:"20 april 2021",
  description:"Awaken the artist inside you and let the creativity flow as “Comic Strip” provides you with the opportunity to put together a story through the little panels of comics. Pick one of the provided prompts to base your comic upon, and make it stand out.",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:'design',
  price:5000
}];

media:any[]=[{name:"Netflix & Chill",
  date:"20 april 2021",
  description:"Consider yourself a web series geek? “Netflix and Chill” is here for you. Use a stipulated budget to assemble a cast consisting of fan-favorite heroes to the most terrifying of villains from shows around the world, and weave a gripping plot of your own.",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"media",
  price:5000
},
{name:"Nation wants to know",
  date:"20 april 2021",
  description:"“Nation wants to know” provides you the platform to prove your mettle in the field of journalism. You’ll be provided with 3 images, based on which you’ll have to create the perfect piece of news, with a catchy headline and a well-constructed series of events.",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"media",
  price:5000
}
];
animation:any[]=[
{name:"UnReal",
  date:"20 april 2021",
  description:"Put your animation skills to test as participants will be required to recreate, to the best of their abilities, the 3D render of a real image which would be provided to them. The closest resembling entry takes it all!!!<br><br>",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"media",
  price:5000
},
{name:"Capture the Imagination",
  date:"20 april 2021",
  description:"Set free the wings of your creativity, as “Capture the imagination” enables you to showcase an imaginative creation of the world in the form of 3D models using your animation skills.<br><br>",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"media",
  price:5000
}];

photog:any[] = [
{name:"InFocus",
  date:"20 april 2021",
  description:"Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them.<br><br>",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"media",
  price:5000
},
{name:"Photoart",
  date:"20 april 2021",
  description:"“Photoart” provides you with a platform to compete with highly skilled photographers. Given a set of 15 photographs, you will be creating an image using any number of the provided photographs, using manipulation.<br><br>",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"media",
  price:5000
}
];

change:any[]= [this.animation,this.media,this.design,this.outreach,this.cinema,this.photog]


cart: any[] = [
];
pin:any;
names:string[]=["animation","media","design","outreach","cinema","photography"]
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dia: MatDialog) { 
    this.pin = this.data.number-1;
    this.title = this.names[this.pin];
    this.cart = this.change[this.pin];
  }

  ngOnInit(): void {

  }

  checkout(l:any):void{
  	console.log(l);
    this.pdf = true
  }
  left():void{
    this.pin = (this.pin+5)%6
    this.cart = this.change[this.pin];
    this.title = this.names[this.pin];
  }
  right():void{
    this.pin = (this.pin+1)%6
    this.cart = this.change[this.pin];
    this.title = this.names[this.pin];
  }

}
