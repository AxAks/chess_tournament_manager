import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})

export class TournamentsComponent implements OnInit {
  api!: string;
  pageTitle: string = 'Tournois';
  tournamentsListResults!: any;
  _tournamentsListUrl!: string;
  @Output() PageTitleEvent = new EventEmitter<string>();

  constructor(private _httpClient: HttpClient) {
    this.PageTitleEvent.emit(this.pageTitle);
  }


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
