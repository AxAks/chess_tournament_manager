import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TournamentsComponent} from "./tournaments/tournaments.component";
import {PlayersComponent} from "./players/players.component";

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path: 'players_menu', component:PlayersComponent },
  { path: 'tournaments_menu', component:TournamentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
