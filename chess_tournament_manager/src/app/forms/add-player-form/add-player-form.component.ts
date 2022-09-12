import { Component, OnInit } from '@angular/core';
import {Player} from "../../models/player";
import {CommonService} from "../../commons/commons.service";

@Component({
  selector: 'app-add-player-form',
  templateUrl: './add-player-form.component.html',
  styleUrls: ['./add-player-form.component.css']
})

export class AddPlayerFormComponent implements OnInit {
  model = new Player('','','','','','',);
  pageTitle: string = 'Ajouter un Joueur'

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.pageTitle$.subscribe(res => this.pageTitle = res);
  }
}
