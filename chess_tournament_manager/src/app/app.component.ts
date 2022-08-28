import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title!: string;
  api!: string;
  playersListResults!: any;

  ngOnInit() {
    this.title = 'Chess Tournament Manager';
    this.api = environment.ChessManagerApi;
  };

  async fetchPlayersList(): Promise<any> {
    let response = await fetch(this.api + 'players/', {
      method: 'GET',
    });
    let playersList = await response.json();
    let playersListResults = await playersList['players'];
    let tempPlayerList= [];
    if (playersListResults.length > 0) {
      for (const player of playersListResults) {
        tempPlayerList.push(player);
      }
      this.playersListResults = tempPlayerList;
    }
  };
}
