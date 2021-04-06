import { Component,ElementRef, OnInit, ViewChild} from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from '@angular/material/snack-bar';

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
  constructor(
    private http:HttpClient,
    private authService: SocialAuthService,
    private storage:LocalStorageService,
    private _snackBar: MatSnackBar) {
    this.user=this.storage.retrieve("user");
     }

 ngOnInit(): void {
  	this.user = this.storage.retrieve('user') as SocialUser;
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

      },(error)=>{this.signOut()})
    }



    if(t == "dep"){ 
      console.log(this.dep)
            if(this.dep != null){
           let k :pay = {token:this.user.idToken,type:"dep",add:this.dep};
           this.http.post("https://fmcweek-liart.vercel.app/pay",k,{withCredentials:true}).subscribe((res:any)=>{
  if(res["message"] == "notoken"){
          this.signOut();
        }
        else{
window.location.href=res["url"];
        }
      },(error)=>{this.signOut()})
    }
    else{
      this.openSnackBar("Please select a club","hide");
    }
  }




    if(t == "sep"){
      if(this.sep != null){
                   let j :pay = {token:this.user.idToken,type:"sep",add:this.sep};
           this.http.post("https://fmcweek-liart.vercel.app/pay",j,{withCredentials:true}).subscribe((res:any)=>{
     if(res["message"] == "notoken"){
          this.signOut();
        }
        else{
window.location.href=res["url"];
        }
      },(error)=>{this.signOut()})
      }
      else{
         this.openSnackBar("Please select an event","hide");
      }
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
      },(error)=>{this.signOut()})
    }
  }


    openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

    signOut():void{
      this.storage.clear("role");
      this.storage.clear("paid");
    this.storage.clear('user');
    this.authService.signOut();
    this.http
    .get("https://fmcweek-liart.vercel.app/google/logout",{withCredentials:true,responseType:"json"})
     .subscribe((res:any)=>{console.log(res)});
      window.location.reload()
  }
}
