import { Component,ElementRef,OnDestroy, OnInit, ViewChild,Renderer2,AfterViewInit,HostListener,Inject } from '@angular/core';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit,OnDestroy,AfterViewInit {

  @ViewChild('pub', {static: false}) publicity: ElementRef;
  @ViewChild('marketing', {static: false}) marketing: ElementRef;
  @ViewChild('relations', {static: false}) relations: ElementRef;
  @ViewChild('design', {static: false}) design: ElementRef;

  pub:number;
  mar:number;
  rel:number;
  des:number;

  p:boolean = true;
  m:boolean = false;
  r:boolean = false;
  d:boolean = false;

  screenHeight: number = window.innerHeight;
  screenWidth: number  = window.innerWidth;
  wide:boolean = this.screenWidth > 500;

  constructor( @Inject(DOCUMENT) private document: Document,private router : Router) {
   }

  ngOnInit(): void {
    this.document.body.className = "bgy";
  }
  ngAfterViewInit():void{
    this.pub = this.publicity.nativeElement.offsetTop - 100;
    this.mar = this.marketing.nativeElement.offsetTop - 100;
    this.rel = this.relations.nativeElement.offsetTop - 100;
    this.des = this.design.nativeElement.offsetTop - 100;

  }

  ngOnDestroy():void{
    this.document.body.className = "";
  }

  goto(x:string){
     this.router.navigateByUrl("/team#"+x);
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    if (window.pageYOffset >= this.pub && window.pageYOffset < this.des) {
      this.p = true
      this.d = false
       this.r = false
      this.m = false
    } else if (window.pageYOffset >= this.des && window.pageYOffset < this.rel) {
      this.p = false
      this.d = true
      this.r = false
      this.m = false
    } else if (window.pageYOffset >= this.rel && window.pageYOffset < this.mar) {
      this.d = false
      this.r = true
      this.p = false
      this.m = false
    } else if (window.pageYOffset >= this.mar) {
      this.d = false
      this.p = false
      this.r = false
      this.m = true
    } else {
    }
  }

    @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          this.wide = this.screenWidth > 500;
    }
}
