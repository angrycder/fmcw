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

  data= {
    "teams": [
        {
            "name": "Core Team",
            "short_name": "ct"
        },
        {
            "name": "Event Team",
            "short_name": "et"
        },
        {
            "name": "Publicity Team",
            "short_name": "pt"
        },
        {
            "name": "Technical Team",
            "short_name": "tt"
        },
        {
            "name": "Marketing Team",
            "short_name": "mt"
        },
        {
            "name": "Public Relations",
            "short_name": "pr"
        },
        {
            "name": "Design Team",
            "short_name": "dt"
        },
        {
            "name": "Social Media",
            "short_name": "sm"
        },
        {
            "name": "Finance Team",
            "short_name": "ft"
        },
        {
            "name": "Content Team",
            "short_name": "cot"
        }
    ],
    "people": [
        {
            "name": "Arya Shukla",
            "team": "ct",
            "phone_number": "9617532829",
            "email": "abhisheks.sharma.met17@itbhu.ac.in"
        },
        {
            "name": "Abhishek Sharma",
            "team": "ct",
            "phone_number": "9559730819",
            "email": "arya.shukla.min17@ithu.ac.in"
        },
        {
            "name": "Abhishek Sharma",
            "team": "ct",
            "phone_number": "8802147796",
            "email": "abhishek.sharma.met17@itbhu.ac.in"
        },
        {
            "name": "Arhan Jain",
            "team": "ct",
            "phone_number": "7417612268",
            "email": "arhan.jain.cer17@itbhu.ac.in"
        },
        {
            "name": "Parag Maru",
            "team": "ct",
            "phone_number": "9409081888",
            "email": "parag.maru.met17@itbhu.ac.in"
        },
        {
            "name": "Vishakha Sedwal",
            "team": "ct",
            "phone_number": "6377599970",
            "email": "vishakhasedwal.chy18@itbhu.ac.in"
        },
        {
            "name": "Puneet Rihan",
            "team": "et",
            "phone_number": "7888440167",
            "email": "puneetrihan.che18@itbhu.ac.in"
        },
        {
            "name": "Yash Singh Parihar",
            "team": "et",
            "phone_number": "6265047585",
            "email": "yashsinghp.met18@itbhu.ac.in"
        },
        {
            "name": "Harshit kamboj",
            "team": "pt",
            "phone_number": "9466111613",
            "email": "harshitkamboj.eee18@itbhu.ac.in"
        },
        {
            "name": "Nitin kumar",
            "team": "pt",
            "phone_number": "7379138201",
            "email": "nitinkumar.mat18@itbhu.ac.in"
        },
        {
            "name": "Chinmay Somani",
            "team": "tt",
            "phone_number": "6377442232",
            "email": "chinmaysomani.cse18@itbhu.ac.in"
        },
        {
            "name": "Karyamsetty Martin ",
            "team": "tt",
            "phone_number": "9652264183",
            "email": "ksnabielmartin.mec18@itbhu.ac.in"
        },
        {
            "name": "Siddhi Jain",
            "team": "mt",
            "phone_number": "70622761551",
            "email": "siddhijain.civ18@itbhu.ac.in"
        },
        {
            "name": "Shikhar Prasad",
            "team": "mt",
            "phone_number": "8979443878",
            "email": "shikharprasad.eee18@itbhu.ac.in"
        },
        {
            "name": "Parth Khandelwal",
            "team": "mt",
            "phone_number": "7771894940",
            "email": "parthkhandelwal.mat18@itbhu.ac.in"
        },
        {
            "name": "Stuti Singh",
            "team": "pr",
            "phone_number": "8707362884",
            "email": "stutisingh.chy18@itbhu.ac.in"
        },
        {
            "name": "Shayak Das",
            "team": "pr",
            "phone_number": "8910689862",
            "email": "shayakdas.cse18@itbhu.ac.in"
        },
        {
            "name": "Mudit Jain",
            "team": "dt",
            "phone_number": "8889988809",
            "email": "muditjain.ece18@itbhu.ac.in"
        },
        {
            "name": "Poojith Valasingam",
            "team": "sm",
            "phone_number": "9493189639",
            "email": "poojithv.ece18@iitbhu.ac.in"
        },
        {
            "name": "Prabal Krishna Sarania",
            "team": "sm",
            "phone_number": "7002027062",
            "email": "prabal.krishnas.mst19@itbhu.ac.in"
        },
        {
            "name": "Divyansh Goyal",
            "team": "sm",
            "phone_number": "7424946974",
            "email": "divyanshgoyal.eee18@itbhu.ac.in"
        },
        {
            "name": "Shikhar Choudhary",
            "team": "ft",
            "phone_number": "9761327327",
            "email": "schaudhary.che18@itbhu.ac.in"
        },
        {
            "name": "Gaurav Verma",
            "team": "ft",
            "phone_number": "7091140432",
            "email": "gauravverma.cer18@itbhu.ac.in"
        },
        {
            "name": "Avishkar Sahai",
            "team": "cot",
            "phone_number": "8828117002",
            "email": "amadhurendras.che18@itbhu.ac.in"
        }
    ]
};

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

  filterItems(name:any){
    console.log(name)
     return this.data["people"].filter(x=> x.team == name )
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?:any) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          this.wide = this.screenWidth > 500;
    }
}
