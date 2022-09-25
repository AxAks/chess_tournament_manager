import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersListComponent } from './home/players/players-list/players-list.component';
import { TournamentsListComponent } from './home/tournaments/tournaments-list/tournaments-list.component';
import { PlayersComponent } from './home/players/players.component';
import { TournamentsComponent } from './home/tournaments/tournaments.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPlayerFormComponent } from './forms/add-player-form/add-player-form.component';
import { AddTournamentFormComponent } from './forms/add-tournament-form/add-tournament-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersListComponent,
    TournamentsListComponent,
    PlayersComponent,
    TournamentsComponent,
    SideMenuComponent,
    AddPlayerFormComponent,
    AddTournamentFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
