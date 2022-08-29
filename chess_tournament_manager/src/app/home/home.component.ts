import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }
  toPlayersMenu(){
    this.router.navigate(['players_menu']);  // define your component where you want to go
  }
  toTournamentsMenu(){
    this.router.navigate(['tournaments_menu']);  // define your component where you want to go
  }
}
