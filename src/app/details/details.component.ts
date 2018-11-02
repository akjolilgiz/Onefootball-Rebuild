import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NewsService } from '../news.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ NewsService ]
})
export class DetailsComponent implements OnInit{
newsId: string;
newsToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private newsService: NewsService) {}

ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.newsId = urlParameters['id'];
   });
   this.newsToDisplay = this.newsService.getNewsById(this.newsId);
  }


}
