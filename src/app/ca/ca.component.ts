import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ca',
  templateUrl: './ca.component.html',
  styleUrls: ['./ca.component.scss']
})
export class CaComponent implements OnInit {

	displayedColumns: string[] = [ 'name', 'code', 'referals'];
  dataSource:any =[];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://fmcweek-liart.vercel.app/leaderboard").subscribe(data => {
      this.dataSource = data;
    })
  }
}
