import { Component,OnDestroy, OnInit,HostListener,Inject } from '@angular/core';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit,OnDestroy {

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
            "email": "arya.shukla.min17@ithu.ac.in",
            "image":"./../../assets/team/ct/arya.jpg"
        },
        {
            "name": "Abhishek Sharma",
            "team": "ct",
            "phone_number": "9559730819",
            "email": "abhisheks.sharma.met17@itbhu.ac.in",
            "image":"./../../assets/team/ct/1.jpg"
          },
        {
            "name": "Abhishek Sharma",
            "team": "ct",
            "phone_number": "8802147796",
            "email": "abhishek.sharma.met17@itbhu.ac.in",
            "image":"./../../assets/team/ct/abhishek2.JPG"
        },
        {
            "name": "Arhan Jain",
            "team": "ct",
            "phone_number": "7417612268",
            "email": "arhan.jain.cer17@itbhu.ac.in",
            "image":"./../../assets/team/ct/arhan.jpg"
        },
        {
            "name": "Parag Maru",
            "team": "ct",
            "phone_number": "9409081888",
            "email": "parag.maru.met17@itbhu.ac.in",
            "image":"./../../assets/team/ct/parag.jpg"
        },
        {
            "name": "Vishakha Sedwal",
            "team": "ct",
            "phone_number": "6377599970",
            "email": "vishakhasedwal.chy18@itbhu.ac.in",
            "image":"./../../assets/team/ct/vishakha.jpg"
        },
        {
            "name": "Puneet Rihan",
            "team": "et",
            "phone_number": "7888440167",
            "email": "puneetrihan.che18@itbhu.ac.in",
            "image":"./../../assets/team/et/puneet.jpg"
        },
        {
            "name": "Yash Singh Parihar",
            "team": "et",
            "phone_number": "6265047585",
            "email": "yashsinghp.met18@itbhu.ac.in",
            "image":"./../../assets/team/et/yash.jpg"
        },
        {
            "name": "Harshit kamboj",
            "team": "pt",
            "phone_number": "9466111613",
            "email": "harshitkamboj.eee18@itbhu.ac.in",
            "image":"./../../assets/team/pt/harshit.jpg"
        },
        {
            "name": "Nitin kumar",
            "team": "pt",
            "phone_number": "7379138201",
            "email": "nitinkumar.mat18@itbhu.ac.in",
            "image":"./../../assets/team/pt/nitin.jpeg"
        },
        {
            "name": "Chinmay Somani",
            "team": "tt",
            "phone_number": "6377442232",
            "email": "chinmaysomani.cse18@itbhu.ac.in",
            "image":"./../../assets/team/tt/chinmay.jpg"
        },
        {
            "name": "Karyamsetty Martin ",
            "team": "tt",
            "phone_number": "9652264183",
            "email": "ksnabielmartin.mec18@itbhu.ac.in",
            "image":"./../../assets/team/tt/martin.jpg"
        },
        {
            "name": "Siddhi Jain",
            "team": "mt",
            "phone_number": "70622761551",
            "email": "siddhijain.civ18@itbhu.ac.in",
            "image":"./../../assets/team/mt/sidi.jpg"
        },
        {
            "name": "Shikhar Prasad",
            "team": "mt",
            "phone_number": "8979443878",
            "email": "shikharprasad.eee18@itbhu.ac.in",
            "image":"./../../assets/team/mt/shikar.jpeg"
        },
        {
            "name": "Parth Khandelwal", 
            "team": "mt",
            "phone_number": "7771894940",
            "email": "parthkhandelwal.mat18@itbhu.ac.in",
            "image":"./../../assets/team/mt/parth.jpg"
        },
        {
            "name": "Stuti Singh",
            "team": "pr",
            "phone_number": "8707362884",
            "email": "stutisingh.chy18@itbhu.ac.in",
            "image":"./../../assets/team/pr/sthuti.jpg"
        },
        {
            "name": "Shayak Das",
            "team": "pr",
            "phone_number": "8910689862",
            "email": "shayakdas.cse18@itbhu.ac.in",
            "image":"./../../assets/team/pr/shayak.jpeg"
        },
        {
            "name": "Mudit Jain",
            "team": "dt",
            "phone_number": "8889988809",
            "email": "muditjain.ece18@itbhu.ac.in",
            "image":"./../../assets/team/dt/mudit.jpg"
        },
        {
            "name": "Poojith Valasingam",
            "team": "sm",
            "phone_number": "9493189639",
            "email": "poojithv.ece18@iitbhu.ac.in",
            "image":"./../../assets/team/sm/poojith.jpg"
        },
        {
            "name": "Prabal Krishna Sarania",
            "team": "sm",
            "phone_number": "7002027062",
            "email": "prabal.krishnas.mst19@itbhu.ac.in",
            "image":"./../../assets/team/sm/prabhal.jpg"
        },
        {
            "name": "Divyansh Goyal",
            "team": "sm",
            "phone_number": "7424946974",
            "email": "divyanshgoyal.eee18@itbhu.ac.in",
            "image":"./../../assets/team/sm/divyansh.jpg"
        },
        {
            "name": "Shikhar Choudhary",
            "team": "ft",
            "phone_number": "9761327327",
            "email": "schaudhary.che18@itbhu.ac.in",
            "image":"./../../assets/team/ft/shikar.jpg"
        },
        {
            "name": "Gaurav Verma",
            "team": "ft",
            "phone_number": "7091140432",
            "image":"./../../assets/team/ft/gaurav.jpg"
        },
        {
            "name": "Avishkar Sahai",
            "team": "cot",
            "phone_number": "8828117002",
            "email": "amadhurendras.che18@itbhu.ac.in",
            "image":"./../../assets/team/cot/avishkar.jpg"
        },
        {
            "name": "Arya Raman",
            "team": "cot",
            "phone_number": "8005670143",
            "email": "aryaraman.bme18@itbhu.ac.in",
            "image":"./../../assets/team/cot/aryaraman.jpg"
        },
{
            "name": "Sneha Gupta",
            "team": "cot",
            "phone_number": "8400817706",
            "email": "snehagupta.che18@itbhu.ac.in",
            "image":"./../../assets/team/cot/sneha.jpg"
        },

{
            "name": "Shreyansh Soni",
            "team": "cot",
            "phone_number": "9413548312",
            "email": "shreyanshsoni.civ18@itbhu.ac.in",
            "image":"./../../assets/team/cot/shreyansh.jpg"
        },

{
            "name": "Rohit Jangid",
            "team": "cot",
            "phone_number": "9935710058",
            "email": "rohitkrjangid.che18@itbhu.ac.in",
            "image":"./../../assets/team/cot/rohit.jpg"
        }


    ]
};

  constructor( @Inject(DOCUMENT) private document: Document,private router : Router) {
   }

  ngOnInit(): void {
    this.document.body.className = "bgy";
  }



  ngOnDestroy():void{
    this.document.body.className = "";
  }

  goto(x:string){
     this.router.navigateByUrl("/team#"+x);
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
