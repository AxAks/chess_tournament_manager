import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  api!: string;
  playersListResults!: any;

  constructor() { }

  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
  }

  async fetchPlayersList(): Promise<any> {
    let response = await fetch(this.api + 'players/', {
      method: 'GET',
    });
    let playersList = await response.json();
    let playersListResults = await playersList['players'];
    let tempPlayersList= [];
    if (playersListResults.length > 0) {
      for (const player of playersListResults) {
        tempPlayersList.push(player);
      }
      this.playersListResults = tempPlayersList;
    }
  };
}
