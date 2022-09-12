import { Component, OnInit } from '@angular/core';
import {Tournament} from "../../models/tournament";
import {CommonService} from "../../commons/commons.service";

@Component({
  selector: 'app-add-tournament-form',
  templateUrl: './add-tournament-form.component.html',
  styleUrls: ['./add-tournament-form.component.css']
})
export class AddTournamentFormComponent implements OnInit {

  model = new Tournament('','',4,'','', '',
    '','','','','');
  pageTitle: string = 'Ajouter un Tournoi'

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.pageTitle$.subscribe(res => this.pageTitle = res);
  }

}
