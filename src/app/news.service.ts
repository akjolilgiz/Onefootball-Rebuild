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
   addNews(newNews: News) {
     this.news.push(newNews)
   }
   getNewsById(newsId: string){
     return this.database.object('news/' + newsId)
  }
}
