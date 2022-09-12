import { Component, Output, OnInit } from '@angular/core';
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

  constructor(private _httpClient: HttpClient, private service: CommonService) {
  }

  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
    this._playersListUrl = this.api + 'players/'
    this.service.pageTitle$.subscribe(res => this.pageTitle = res);
}
  changePageTitleOnClick(newPageTitle: string) {
    this.service.changePageTitle(newPageTitle);  //invoke new Data
  }

  async fetchPlayersList(sorted_by: string): Promise<any> {
    let request = this._httpClient.get(this._playersListUrl)
    if (sorted_by) {
      let request = this._httpClient.get(this._playersListUrl, {params: {sort_by: sorted_by}})
      request.subscribe(playersListResponse => {
        // @ts-ignore
        let playersListResults = playersListResponse['players'];
        let tempPlayersList = [];
        if (playersListResults.length > 0) {
          for (const player of playersListResults) {
            tempPlayersList.push(player);
          }
          this.playersListResults = tempPlayersList;
        }
      });
    } else {
    request.subscribe(playersListResponse => {
      // @ts-ignore
      let playersListResults = playersListResponse['players'];
      let tempPlayersList = [];
      if (playersListResults.length > 0) {
        for (const player of playersListResults) {
          tempPlayersList.push(player);
        }
        this.playersListResults = tempPlayersList;
      }
    });
  }
  };
}
