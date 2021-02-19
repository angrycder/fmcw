import { Component,ElementRef, OnInit, ViewChild,Renderer2 } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fmcw';

  constructor(private router : Router,private render:Renderer2){}

  @ViewChild('sidenav') sidenav: MatSidenav;
  last : MatButton;
  
  close() : void {
    this.sidenav.close();
  }

  goto(path: string,el:MatButton):void {
  	if(this.last!=undefined){
  		this.last.color = undefined;
  	}
  	el.color = "primary";
  	this.last = el;
  	this.router.navigateByUrl(path);
  	}
}
