import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopularPagesComponent } from './popular-pages/popular-pages.component';
import { TopNewsComponent } from './top-news/top-news.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularPagesComponent,
    TopNewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
