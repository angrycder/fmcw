import { Component, OnInit,HostListener} from '@angular/core';
import { SocialUser } from "angularx-social-login";
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from '@angular/material/dialog';
import { PayComponent } from './../pay/pay.component';


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
  constructor(private http:HttpClient ,private storage:LocalStorageService,public dia: MatDialog) { }

  ngOnInit(): void {
      this.user =this.storage.retrieve('user');
      this.loggedIn = (this.user != null);
      this.storage.observe('user').subscribe((usr)=>{
        this.user =usr
        this.loggedIn = (usr != null);
    });
     }

  pop_up(s:number):void{
    const dialogRef = this.dia.open(PayComponent, {
      width: this.screen,
      height:this.screen,
      maxWidth:"100vw",
      data: { number:s}
    });
    dialogRef.backdropClick().subscribe((res)=>{this.dia.closeAll()})
    dialogRef.afterClosed().subscribe(result => {    });
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
