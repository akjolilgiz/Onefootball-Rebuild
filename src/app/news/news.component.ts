import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news.model';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Location } from '@angular/common';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]

})
export class NewsComponent implements OnInit{
  news: FirebaseListObservable<any[]>;
  constructor(private router: Router, private newsService: NewsService ) {}

  ngOnInit(){
    this.news = this.newsService.getNews();
  }

  goToDetailPage(clickedNews: News) {
    this.router.navigate(['news', clickedNews.$key]);
  };

}
