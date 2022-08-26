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

  ngOnInit() {
    this.title = 'Chess Tournament Manager';
    this.api = environment.ChessManagerApi
  };

  async fetchPlayersList(): Promise<any> {
    let response = await fetch(this.api + 'players/', {
      method: 'GET'
    });
    let playersList = await response.json()
    return playersList
  };
}
