import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from "@angular/common/http";
import {DialogService} from './../service/dialog.service';
import { LoginComponent } from './../login/login.component'
declare var Razorpay : any;

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
   user: SocialUser;
  loggedIn :boolean; 
  shirt:string;

  constructor(private http:HttpClient ,private storage:LocalStorageService,public dia: DialogService,private router:ActivatedRoute) { }

  ngOnInit(): void {
      this.storage.observe('user').subscribe((usr)=>{
        this.user =usr
        this.loggedIn = (usr != null);
    });
      }

    checkout(item:any){
      if(this.loggedIn){
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
   else{
     this.pop_up_login()

   }
  }

    pop_up_login():void{
    const dialogRef = this.dia.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {    });
  }

}
