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
  all_tournaments_list: any;
  tournamentsSortedByDates: any;
  tournamentsSortedByLocation: any;

  constructor(private _httpClient: HttpClient, private service: CommonService) {
  }


  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
    this._tournamentsListUrl = this.api + 'tournaments/';
    this.service.pageTitle$.subscribe(res => this.pageTitle = res);
    this.all_tournaments_list = this.fetchTournamentsList()
  }

  changePageTitleOnClick(newPageTitle: string) {
    this.service.changePageTitle(newPageTitle);  //invoke new Data
  }

  sortTournamentsByDates(tournaments: any) {
    let tournamentsSortedByDates = tournaments.sort((a: { start_date: string },
                                           b: { start_date: string }) => (a.start_date > b.start_date))
    this.tournamentsSortedByDates = tournamentsSortedByDates
  }

  sortTournamentsByLocation(tournaments: any) {
    let tournamentsSortedByLocation = tournaments.sort((a: { location: string; },
                                              b: { location: string; }) => (a.location > b.location))
    this.tournamentsSortedByLocation = tournamentsSortedByLocation
  }

  async fetchTournamentsList(): Promise<any> {
    this._httpClient.get(this._tournamentsListUrl).subscribe(tournamentsListResponse => {
      // @ts-ignore
      let tournamentsListResults = tournamentsListResponse['tournaments'];
      let tempTournamentsList = [];
      if (tournamentsListResults.length > 0) {
        for (const tournament of tournamentsListResults) {
          tempTournamentsList.push(tournament);
        }
        this.all_tournaments_list = tempTournamentsList;
      }
    });
  };
}
