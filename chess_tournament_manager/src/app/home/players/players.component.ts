import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CommonService} from "../../commons/commons.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  api!: string;
  pageTitle!: string;
  playersListResults!: any;
  _playersListUrl!: string;
  all_players_list!: any;
  playerSortedByName: any;
  playerSortedByRanking: any;

  constructor(private _httpClient: HttpClient, private service: CommonService) {
  }

  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
    this._playersListUrl = this.api + 'players/'
    this.service.pageTitle$.subscribe(res => this.pageTitle = res);
    this.all_players_list = this.fetchPlayersList()
  }

  changePageTitleOnClick(newPageTitle: string) {
    this.service.changePageTitle(newPageTitle);  //invoke new Data
  }

  sortPlayerByName(players: any) {
    let playerSortedByName = players.sort((a: { last_name: string; },
                                           b: { last_name: string; }) => (a.last_name > b.last_name))
    this.playerSortedByName = playerSortedByName
  }


  sortPlayerByRanking(players: any) {
    let playerSortedByRanking = players.sort((a: { ranking: number; },
                                              b: { ranking: number; }) => (a.ranking < b.ranking))
    this.playerSortedByRanking = playerSortedByRanking
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
        this.all_players_list = tempPlayersList;
      }
    });
  };
}
