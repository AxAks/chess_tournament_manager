import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { OngoingTournamentComponent } from './ongoing-tournament/ongoing-tournament.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersComponent,
    TournamentsComponent,
    OngoingTournamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
