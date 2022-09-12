import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CommonService} from "../../commons/commons.service";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})

export class TournamentsComponent implements OnInit {
  api!: string;
  tournamentsListResults!: any;
  _tournamentsListUrl!: string;
  pageTitle: string = 'Tournois';

  constructor(private _httpClient: HttpClient, private service: CommonService) {
  }


  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
    this._tournamentsListUrl = this.api + 'tournaments/';
    this.service.pageTitle$.subscribe(res => this.pageTitle = res);
  }

  changePageTitleOnClick(newPageTitle: string) {
    this.service.changePageTitle(newPageTitle);  //invoke new Data
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
