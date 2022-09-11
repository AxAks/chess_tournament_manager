import {Component, OnChanges, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  api!: string;
  _DataUrl!: string;
  data_status!: string;

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
    this._DataUrl = this.api + 'data/'
  }

  async loadData(): Promise<any> {
    this._httpClient.get(this._DataUrl).subscribe(statusResponse => {
      // @ts-ignore
      this.data_status = statusResponse['status'];
    });
  };

  async saveData(): Promise<any> {
    this._httpClient.post(this._DataUrl, {}).subscribe(statusResponse => {
      // @ts-ignore
      this.data_status = statusResponse['status'];
    });
  }
}

