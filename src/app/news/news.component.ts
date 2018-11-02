import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]

})
export class NewsComponent{
  news: News[] = [];
  constructor(private router: Router, private newsService: NewsService ) {}

  ngOnInit(){
    this.news = this.newsService.getNews();
  }

  goToDetailPage(clickedNews: News) {
    this.router.navigate(['news', clickedNews.id]);
  };

}
