import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
	title: any;
   cinema: any[] = [
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
}];
   outreach: any[] = [
     {name:" Vlogoholic\n",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"outreach",
  price:5000
},
  {name:"Documentary making",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"outreach",
  price:5000
}];
    design:any[] = [  {name:"Monogram",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:'design',
  price:5000
},
  {name:"Comic Strip",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:'design',
  price:5000
}];

media:any[]=[{name:"Nation wants to know",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"media",
  price:5000
},
{name:"Netflix & Chill",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"media",
  price:5000
}
];
animation:any[]=[
{name:"UnReal",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"media",
  price:5000
},
{name:"Capture the Imagination",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"media",
  price:5000
}];

photog:any[] = [
{name:"Theme Photography",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  club:"media",
  price:5000
},
{name:"Photoart",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.pin = this.data.number-1;
    this.title = this.names[this.pin];
    this.cart = this.change[this.pin];
  }

  ngOnInit(): void {

  }

  checkout(l:any):void{
  	console.log(l)
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
