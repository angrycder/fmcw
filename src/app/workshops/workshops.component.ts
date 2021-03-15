import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {

  constructor() { }
   showFiller = false;
   n:number;
  work: any[] = [
   {name:" Short-film Competition",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  price:5000
},
  {name:"That's how B-Roll",
  date:"20 april 2021",
  description:"Cassandra is a wildlife photography competition based on dogs especially on the breeds such as hukies and shibas",
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  price:5000
}]
  ngOnInit(): void {
  }

}
