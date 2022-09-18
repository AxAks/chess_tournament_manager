import { Component, OnInit } from '@angular/core';
import {Player} from "../../models/player";
import {CommonService} from "../../commons/commons.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-add-player-form',
  templateUrl: './add-player-form.component.html',
  styleUrls: ['./add-player-form.component.css']
})

export class AddPlayerFormComponent implements OnInit {
  model = new Player('','','','','','',);
  pageTitle: string = 'Ajouter un Joueur'
  api!: string
  _playersListUrl!: string
  data!: any

  constructor(private _httpClient: HttpClient, private service: CommonService) {
    this.data = new FormData();
    this.data.append('last_name', 'Fjkd');
    this.data.append('first_name', 'DFJKE');
    this.data.append('birthdate', '2000-01-22');
    this.data.append('gender', 'MALE');
    this.data.append('ranking', '600');
  }

  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
    this._playersListUrl = this.api + 'players/'
    this.service.pageTitle$.subscribe(res => this.pageTitle = res);
  }

  onSubmit() {
    this._httpClient.post(this._playersListUrl,  this.data).subscribe();
    console.log(JSON.stringify(this.data))
  }
}
