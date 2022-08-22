import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  api!: string;

  constructor() { }

  ngOnInit(): void {
    this.api = environment.ChessManagerApi
  }

  async fetchPlayersList(): Promise<any> {
    let response = await fetch(this.api + 'players/', {
      method: 'GET'
    });
    let playersList = await response.json()
    return playersList
  };

}
