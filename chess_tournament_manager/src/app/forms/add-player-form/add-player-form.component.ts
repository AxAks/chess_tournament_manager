import {Component, OnInit} from '@angular/core';
import {Player} from "../../models/player";
import {CommonService} from "../../commons/commons.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalService} from "../../_modal";

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
  last_name!: FormControl;
  first_name!: FormControl;
  genders = [
    { value: "MALE", name: "Homme" },
    { value: "FEMALE", name: "Femme" },
  ];
  gender!: FormControl;
  ranking!: FormControl;
  newPlayer!: any;

  constructor(private _httpClient: HttpClient,
              private service: CommonService,
              private formBuilder: FormBuilder,
              private modalService: ModalService) {
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

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  savePlayer() {
    const form = this.playerForm.value;
    // @ts-ignore
    form['last_name'] = this.playerForm.get('lastName').value;
    delete form['lastName']
    // @ts-ignore
    form['first_name'] = this.playerForm.get('firstName').value;
    delete form['firstName']
    this._httpClient.post(this._playersUrl, form).subscribe((response: any) => {
      console.log(response)

      this.newPlayer = response.new_player;
      this.playerForm.reset();
      this.openModal('player-created-modal')
    })
  };
}

