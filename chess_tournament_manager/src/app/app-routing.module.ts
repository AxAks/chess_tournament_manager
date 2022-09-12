import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TournamentsComponent} from "./home/tournaments/tournaments.component";
import {PlayersComponent} from "./home/players/players.component";
import {AddPlayerFormComponent} from "./forms/add-player-form/add-player-form.component";
import {AddTournamentFormComponent} from "./forms/add-tournament-form/add-tournament-form.component";

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path: 'players_menu', component:PlayersComponent },
  { path: 'players_menu/add_player', component:AddPlayerFormComponent },
  { path: 'tournaments_menu', component:TournamentsComponent },
  { path: 'tournaments_menu/add_tournament', component:AddTournamentFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
