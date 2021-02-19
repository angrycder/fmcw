import { Component, OnInit,HostListener } from '@angular/core';
import {ViewportScroller} from '@angular/common'

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss']
})
export class LandComponent implements OnInit {

	config : any;

  constructor(private scroller : ViewportScroller) { }

  ngOnInit(): void {
  	this.config = { 
  		leftTime:Math.floor((new Date("2021-03-20T12:01:04.753Z").getTime()-new Date().getTime() )/1000),
  		format:"HH:mm:ss"
  	}
  	console.log(new Date().getTime() - new Date("2021-03-20T12:01:04.753Z").getTime());
  }
  @HostListener('window:scroll', ['$event']) 
  scroll():void{
  console.log("events")
  }

}
