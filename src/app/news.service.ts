import { Injectable } from '@angular/core';
import { News } from './news.model';
import { NEWS } from './newsData';
import { DetailsComponent } from './details/details.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class NewsService {
  news: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;

  constructor(private database: AngularFireDatabase, private http: Http, public afAuth: AngularFireAuth) {
    this.news = database.list('news');
}
  getBySource(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=a8a17bb4b2734a8ca5f4863944460fd1')
  }
  getNews() {
    return this.news;
   }
   addNews(newNews: News) {
     this.news.push(newNews)
   }
   getNewsById(newsId: string){
     return this.database.object('news/' + newsId)
  }
  login() {
   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
 }

 logout() {
   this.afAuth.auth.signOut();
 }
}
