import {Component, OnChanges, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CommonService} from "../commons/commons.service";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  api!: string;
  pageTitle!: string;
  _DataUrl!: string;
  data_status!: string;

  constructor(private _httpClient: HttpClient, private service: CommonService) {
  }

  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
    this._DataUrl = this.api + 'data/'
    this.service.pageTitle$.subscribe(res => this.pageTitle = res);
  }

  async loadData(): Promise<any> {
    this._httpClient.get(this._DataUrl).subscribe(statusResponse => {
      // @ts-ignore
      this.data_status = statusResponse['status'];
    });
  };

  changePageTitleOnClick(newPageTitle: string) {
    this.service.changePageTitle(newPageTitle);  //invoke new Data
  }

  async saveData(): Promise<any> {
    this._httpClient.post(this._DataUrl, {}).subscribe(statusResponse => {
      // @ts-ignore
      this.data_status = statusResponse['status'];
    });
  }
}

