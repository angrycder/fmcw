import { Component, OnInit,HostListener} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss']
})
export class LandComponent implements OnInit {

	config : any;
  anchors:string[]= ["1","2","3"];
  loc :number=0;
  isscrolling:boolean=true;
  screenHeight: number = window.innerHeight;
  screenWidth: number  = window.innerWidth;
  wide:boolean = this.screenWidth < 500;
  constructor( private router : Router) { }

  ngOnInit(): void {
  	this.config = { 
  		leftTime:Math.floor((new Date("2021-03-20T12:01:04.753Z").getTime()-new Date().getTime() )/1000),
  		format:"HH:mm:ss"
  	}
    this.log();
  }
  private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
  log():void{
   }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          this.wide = this.screenWidth < 500;
    }

 }
