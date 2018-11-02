import { Injectable } from '@angular/core';
import { News } from './news.model';
import { NEWS } from './newsData';
import { DetailsComponent } from './details/details.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class NewsService {
  news: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.news = database.list('news');
}
  getNews() {
    return this.news;
   }
   getNewsById(newsId: number){
    // for (var i = 0; i <= NEWS.length - 1; i++) {
    //   if (NEWS[i].id === newsId) {
    //     return NEWS[i];
    //   }
    // }
  }
}
