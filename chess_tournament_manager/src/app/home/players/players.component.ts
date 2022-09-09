import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  api!: string;
  playersListResults!: any;
  _playersListUrl!: string;


  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
    this._playersListUrl = this.api + 'players/'
  }

  async fetchPlayersList(): Promise<any> {
    this._httpClient.get(this._playersListUrl).subscribe(playersListResponse => {
      // @ts-ignore
      let playersListResults = playersListResponse['players'];
      let tempPlayersList = [];
      if (playersListResults.length > 0) {
        for (const player of playersListResults) {
          tempPlayersList.push(player);
        }
        this.playersListResults = tempPlayersList;
      }
    });
  };
}
