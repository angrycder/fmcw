import { Component, OnInit,HostListener ,Renderer2} from '@angular/core';
import { SocialUser } from "angularx-social-login";
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from "@angular/common/http";
import {DialogService} from './../service/dialog.service';
import { LoginComponent } from './../login/login.component';
import { PayComponent } from './../pay/pay.component';
declare var Razorpay : any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
user: SocialUser;
  loggedIn :boolean; 
  screenHeight: number = window.innerHeight;
  screenWidth: number  = window.innerWidth;
  screen: string = (this.screenWidth>400)?"90%":"100%";
  constructor(private http:HttpClient ,private storage:LocalStorageService,public dia: DialogService) { }

  ngOnInit(): void {
      this.user =this.storage.retrieve('user');
      this.loggedIn = (this.user != null);
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
     pop_up(s:number):void{
    const dialogRef = this.dia.dialog.open(PayComponent, {
      width: this.screen,
      height:this.screen,
      maxWidth:"100vw",
      data: { number:s}
    });
    dialogRef.backdropClick().subscribe((res)=>{this.dia.dialog.closeAll()})
    dialogRef.afterClosed().subscribe(result => {    });
  }

  log():void{
    console.log("works")
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          if(this.screenWidth < 400){
            this.screen = '100% ';
            console.log("10002")
          }
          else{
            this.screen = '90%';
          }
    }


}
