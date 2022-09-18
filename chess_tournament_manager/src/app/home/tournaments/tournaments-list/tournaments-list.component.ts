import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})

export class TournamentsListComponent implements OnInit {
  @Input() all_tournaments_list : any;
  @Input() tournamentsSortedByDates : any;
  @Input() tournamentsSortedByLocation : any;
  constructor() {
  }

  ngOnInit(): void {

  }
}

