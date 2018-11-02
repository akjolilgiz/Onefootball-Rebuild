import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [NewsService]

})
export class AdminComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }
  submitForm(title: string, description: string, url: string, content: string) {
    var newNews: News = new News(title, description, url, content);
    this.newsService.addNews(newNews);
  }
}
