import { Component,ElementRef, OnInit, ViewChild,Renderer2 } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from "@angular/common/http";

declare var Razorpay : any;

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
  constructor(private http:HttpClient,private authService: SocialAuthService,private storage:LocalStorageService,private renderer: Renderer2) {console.log(this.drop) }

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


  checkout(item:any){
  	this.http.post("https://fmcw.herokuapp.com/create-checkout-session",{}).subscribe((res:any)=>{
  		let  a :any = new Razorpay({
    "key": "rzp_test_BZmqKg2c3vGbFd", // Enter the Key ID generated from the Dashboard
    "amount": item.price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": item.name,
    "description": item.description,
    "image": item.img,
    "order_id": res.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
       console.log(response);
    },
        "prefill": {
        "name": this.user.name,
        "email": this.user.email,
    },    
    "theme": {
        "color": "#7b1fa2"
    }
});
  		a.open();
  	});
  }

}
