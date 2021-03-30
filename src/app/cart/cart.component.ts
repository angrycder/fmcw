import { Component,ElementRef, OnInit, ViewChild,Renderer2, NgZone } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any[] = [
  {name:"cassandra",
  date:"20 april 2021",
  price:"50000",
  description:"cassandra is a digital art competeions inspired by yaday a dadasd asdadadadkajnjndaadd dadnadnakdnjdndwunnjsfwfsnsfb",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU4OC1X6GKK1T_I5bb1VMyRd_Y45wqexFbw&usqp=CAU"
},
  {name:"cassandra",
  date:"20 april 2021",
  price:"50000",
  description:"cassandra is a digital art competeions inspired by yaday a dadasd asdadadadkajnjndaadd dadnadnakdnjdndwunnjsfwfsnsfb",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU4OC1X6GKK1T_I5bb1VMyRd_Y45wqexFbw&usqp=CAU"
},
  {name:"cassandra",
  date:"20 april 2021",
  price:"50000",
  description:"cassandra is a digital art competeions inspired by yaday a dadasd asdadadadkajnjndaadd dadnadnakdnjdndwunnjsfwfsnsfb",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU4OC1X6GKK1T_I5bb1VMyRd_Y45wqexFbw&usqp=CAU"
},
  {name:"cassandra",
  date:"20 april 2021",
  price:"50000",
  description:"cassandra is a digital art competeions inspired by yaday a dadasd asdadadadkajnjndaadd dadnadnakdnjdndwunnjsfwfsnsfb",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU4OC1X6GKK1T_I5bb1VMyRd_Y45wqexFbw&usqp=CAU"
}
];

 user: SocialUser;
  @ViewChild('drop1', {static: false}) drop: ElementRef;
  s:boolean =false;
  constructor(private zone: NgZone,private router:Router,private http:HttpClient,private authService: SocialAuthService,private storage:LocalStorageService,private renderer: Renderer2) {console.log(this.drop) }

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


  allPass(){

  }

}
