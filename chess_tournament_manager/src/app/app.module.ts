import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersListComponent } from './home/players-list/players-list.component';
import { TournamentsListComponent } from './home/tournaments-list/tournaments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersListComponent,
    TournamentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
