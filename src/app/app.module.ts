import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopularPagesComponent } from './popular-pages/popular-pages.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { OneFootballVideoComponent } from './one-football-video/one-football-video.component';
import { DetailsComponent } from './details/details.component';
import { NewsComponent } from './news/news.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularPagesComponent,
    TopNewsComponent,
    OneFootballVideoComponent,
    DetailsComponent,
    NewsComponent,
    HomepageComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    routing,    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
