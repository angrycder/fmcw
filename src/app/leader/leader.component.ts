import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss']
})
export class LeaderComponent implements OnInit {

displayedColumns: string[] = ['name', 'code', 'referals'];
  dataSource:any =[];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://fmcweek-liart.vercel.app/leaderboard").subscribe((data:any) => {
      this.dataSource = data;
     console.log(this.dataSource)
    })
  }

}
