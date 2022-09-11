import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})

export class TournamentsListComponent implements OnInit {
  @Input() tournamentsListResults: any;

  constructor() {
  }

  ngOnInit(): void {

  }
}

