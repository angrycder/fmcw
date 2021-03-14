import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss']
})
export class LeaderComponent implements OnInit {

displayedColumns: string[] = ['position', 'name', 'code', 'referals'];
  dataSource =[
  {position: 1, name: 'Arya shukla', referals: 1.0079, code: 'H'},
  {position: 2, name: 'Chinmay', referals: 4.0026, code: 'He'},
  {position: 3, name: 'Martin', referals: 6.941, code: 'Li'},
];


  constructor() { }

  ngOnInit(): void {
  }

}
