import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from "@angular/common/http";
import { LoginComponent } from './../login/login.component'

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
   user: SocialUser;
  loggedIn :boolean; 
  shirt:string;

  constructor(private http:HttpClient ,private storage:LocalStorageService,private router:ActivatedRoute) { }

  ngOnInit(): void {
      this.storage.observe('user').subscribe((usr)=>{
        this.user =usr
        this.loggedIn = (usr != null);
    });
      }


}
