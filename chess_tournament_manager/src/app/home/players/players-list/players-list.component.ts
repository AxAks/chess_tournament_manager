import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
@Input() all_players_list : any;
@Input() playerSortedByName : any;
@Input() playerSortedByRanking : any;

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit(): void {

  }
}
