import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
	club :any;
 cart: any[] = [
  {name:"cassandra",
  date:"20 april 2021",
  description:"cassandra is a digital art competeions inspired by yaday a dadasd asdadadadkajnjndaadd dadnadnakdnjdndwunnjsfwfsnsfb",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU4OC1X6GKK1T_I5bb1VMyRd_Y45wqexFbw&usqp=CAU"
},
  {name:"cassandra",
  date:"20 april 2021",
  description:"cassandra is a digital art competeions inspired by yaday a dadasd asdadadadkajnjndaadd dadnadnakdnjdndwunnjsfwfsnsfb",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU4OC1X6GKK1T_I5bb1VMyRd_Y45wqexFbw&usqp=CAU"
},
  {name:"cassandra",
  date:"20 april 2021",
  description:"cassandra is a digital art competeions inspired by yaday a dadasd asdadadadkajnjndaadd dadnadnakdnjdndwunnjsfwfsnsfb",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU4OC1X6GKK1T_I5bb1VMyRd_Y45wqexFbw&usqp=CAU"
},
  {name:"cassandra",
  date:"20 april 2021",
  description:"cassandra is a digital art competeions inspired by yaday a dadasd asdadadadkajnjndaadd dadnadnakdnjdndwunnjsfwfsnsfb",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU4OC1X6GKK1T_I5bb1VMyRd_Y45wqexFbw&usqp=CAU"
},
  {name:"cassandra",
  date:"20 april 2021",
  description:"cassandra is a digital art competeions inspired by yaday a dadasd asdadadadkajnjndaadd dadnadnakdnjdndwunnjsfwfsnsfb",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU4OC1X6GKK1T_I5bb1VMyRd_Y45wqexFbw&usqp=CAU"
}
];

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  	  this.router.queryParams.subscribe(params => {
      this.club=params.club;
    });
  
  }

}
