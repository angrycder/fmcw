import { Component, OnInit,HostListener ,Renderer2,AfterViewInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss']
})
export class LandComponent implements OnInit,AfterViewInit {

	config : any;
  anchors:string[]= ["1","2","3"];
  loc :number=0;
  isscrolling:boolean=true;
  screenHeight: number = window.innerHeight;
  screenWidth: number  = window.innerWidth;
  wide:boolean = this.screenWidth < 500;
  constructor(private renderer2: Renderer2,
    private router : Router,
    private scroller:ViewportScroller,
    private location: Location) { }

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

  ngAfterViewInit():void{

  }

 }
