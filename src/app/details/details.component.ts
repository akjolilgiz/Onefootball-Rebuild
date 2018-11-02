import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ NewsService ]
})
export class DetailsComponent implements OnInit{
newsId: number;
newsToDisplay: News;
  constructor(private route: ActivatedRoute, private location: Location, private albumService: NewsService) {}

ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.newsId = parseInt(urlParameters['id']);
   });
   this.newsToDisplay = this.albumService.getNewsById(this.newsId);
  }
}
