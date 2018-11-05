import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsService } from '../news.service';
import { PhotosListComponent } from '../photos-list/photos-list.component'

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css'],
  providers: [ NewsService ]
})
export class NewsFormComponent {
  articles: any[]=null;
  constructor(private newsSource: NewsService) { }

  getNews() {
    this.newsSource.getBySource().subscribe(response => {this.articles = response.json();
    });
  }
}
