import { Component,ElementRef, OnInit, ViewChild,Renderer2, NgZone } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";

interface pay{
  token:string;
  type:string;//aep dep sep awp
  add:string;
}

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
  sep:string;
  dep:string;
  @ViewChild('drop1', {static: false}) drop: ElementRef;
  s:boolean =false;
  constructor(private zone: NgZone,
    private router:Router,
    private http:HttpClient,
    private authService: SocialAuthService,
    private storage:LocalStorageService,
    private renderer: Renderer2) {
    this.user=this.storage.retrieve("user");
     }

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


  checkOut(t:string):void{
     if(t == "aep"){
       let p :pay = {token:this.user.idToken, type:"aep",add:""};
       console.log(p);
      this.http.post("https://fmcweek-liart.vercel.app/pay",p,{withCredentials:true}).subscribe((res:any)=>{
        console.log(res);
        if(res["message"] == "notoken"){
          this.signOut();
        }
        else{
window.location.href=res["url"];
        }

      })
    }
    if(t == "dep" && (this.sep != "")){
           let k :pay = {token:this.user.idToken,type:"dep",add:this.dep};
           this.http.post("https://fmcweek-liart.vercel.app/pay",k,{withCredentials:true}).subscribe((res:any)=>{
  if(res["message"] == "notoken"){
          this.signOut();
        }
        else{
window.location.href=res["url"];
        }
      })
    }
    if(t == "sep" && (this.dep != "")){
           let j :pay = {token:this.user.idToken,type:"sep",add:this.sep};
           this.http.post("https://fmcweek-liart.vercel.app/pay",j,{withCredentials:true}).subscribe((res:any)=>{
     if(res["message"] == "notoken"){
          this.signOut();
        }
        else{
window.location.href=res["url"];
        }
      })
    }
    if(t == "awp"){
       let p :pay = {token:this.user.idToken,type:"awp",add:""};
           p["type"] = "awp";
           this.http.post("https://fmcweek-liart.vercel.app/pay",p,{withCredentials:true}).subscribe((res:any)=>{
 if(res["message"] == "notoken"){
          this.signOut();
        }
        else{
window.location.href=res["url"];
        }
      })
    }
  }

    signOut():void{
    this.storage.clear('user');
    this.authService.signOut();
    this.http
    .get("https://fmcweek-liart.vercel.app/google/logout",{withCredentials:true,responseType:"json"})
     .subscribe((res:any)=>{console.log(res)});
      window.location.reload()
  }
}
