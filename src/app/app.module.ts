import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopularPagesComponent } from './popular-pages/popular-pages.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { OneFootballVideoComponent } from './one-football-video/one-football-video.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularPagesComponent,
    TopNewsComponent,
    OneFootballVideoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
