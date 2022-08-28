import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent implements OnInit {
  api!: string;
  tournamentsListResults!: any;

  constructor() { }

  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
  }

  async fetchTournamentsList(): Promise<any> {
    let response = await fetch(this.api + 'tournaments/', {
      method: 'GET',
    });
    let tournamentsList = await response.json();
    let tournamentsListResults = await tournamentsList['tournaments'];
    let tempTournamentsList= [];
    if (tournamentsListResults.length > 0) {
      for (const tournament of tournamentsListResults) {
        tempTournamentsList.push(tournament);
      }
      this.tournamentsListResults = tempTournamentsList;
    }
  };
}
