import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-your-news',
  templateUrl: './your-news.component.html',
  styleUrls: ['./your-news.component.css'],
  providers: []
})
export class YourNewsComponent{
  @Input() yourNews;
  constructor() { }

}
