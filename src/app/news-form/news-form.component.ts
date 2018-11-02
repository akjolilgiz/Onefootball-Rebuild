import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css'],
  providers: [ NewsService ]
})
export class NewsFormComponent implements OnInit {
  articles: any[]=null;
  constructor(private newsSource: NewsService) { }
  getNews(source: string) {
    this.newsSource.getBySource(source).subscribe(response => {this.articles = response.json();
    });
  }
  ngOnInit() {
  }

}
