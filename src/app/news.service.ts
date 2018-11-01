import { Injectable } from '@angular/core';
import { News } from './news.model';
import { NEWS } from './newsData';
@Injectable()
export class NewsService {

  constructor() { }
  
  getNews() {
     return NEWS;
   }
}
