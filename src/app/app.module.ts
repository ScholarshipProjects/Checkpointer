import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from 'angular2-google-maps/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CheckpointsComponent } from './checkpoints/checkpoints.component';
import { HeaderComponent } from './header/header.component';
import { ActionsComponent } from './checkpoints/actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    CheckpointsComponent,
    HeaderComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1COgqz0VLTDGrZzZr4Spbrtr_9_DxvnQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
