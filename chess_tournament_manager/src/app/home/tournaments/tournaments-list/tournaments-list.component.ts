import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent implements OnInit {
  api!: string;
  tournamentsListResults!: any;
  _tournamentsListUrl!: string;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
    this._tournamentsListUrl = this.api + 'tournaments/'
  }

  async fetchTournamentsList(): Promise<any> {
    this._httpClient.get(this._tournamentsListUrl).subscribe(tournamentsListResponse => {
      // @ts-ignore
      let tournamentsListResults = tournamentsListResponse['tournaments'];
      let tempTournamentsList= [];
      if (tournamentsListResults.length > 0) {
        for (const tournament of tournamentsListResults) {
          tempTournamentsList.push(tournament);
        }
        this.tournamentsListResults = tempTournamentsList;
      }
    });
  };
}
