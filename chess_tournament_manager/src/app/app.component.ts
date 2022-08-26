import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {environment} from "../environments/environment";

const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title!: string;
  Api!: string;
  PlayerList! : any

  ngOnInit() {
    this.title = 'Chess Tournament Manager';
    this.Api = environment.ChessManagerApi
  };

  async  fetchPlayersList() {
    let response = await fetch(this.Api + 'players/', {
      method: 'GET'
    });
    this.PlayerList = await response.json();
  };
}

