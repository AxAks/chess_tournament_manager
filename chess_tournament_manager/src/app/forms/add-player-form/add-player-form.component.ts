import {Component, OnInit} from '@angular/core';
import {Player} from "../../models/player";
import {CommonService} from "../../commons/commons.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-player-form',
  templateUrl: './add-player-form.component.html',
  styleUrls: ['./add-player-form.component.css']
})

export class AddPlayerFormComponent implements OnInit {
  playerModel = new Player!('', '', '', '', '', '',);
  pageTitle: string = 'Ajouter un Joueur'
  api!: string
  _playersUrl!: string
  playerForm!: FormGroup
  birthdate!: FormControl;
  lastName!: FormControl;
  firstName!: FormControl;
  gender!: FormControl;
  ranking!: FormControl;

  constructor(private _httpClient: HttpClient, private service: CommonService, private formBuilder: FormBuilder,) {
  };

  ngOnInit(): void {
    this.api = environment.ChessManagerApi;
    this._playersUrl = this.api + 'players/';
    this.service.pageTitle$.subscribe(res => this.pageTitle = res);
    this.playerForm = this.formBuilder.group({
      lastName: new FormControl('lastName', [Validators.required]),
      firstName: new FormControl('firstName', [Validators.required]),
      birthdate: new FormControl('birthdate', [Validators.required]),
      gender: new FormControl('gender',  [Validators.required]),
      ranking: new FormControl('ranking', [Validators.required]),
    })
  };

  savePlayer() {
    const form = this.playerForm.value;
    this._httpClient.post(this._playersUrl, form).subscribe();
    this.playerForm.reset();
    alert("Nouveau Joueur Créé");
  }
}

