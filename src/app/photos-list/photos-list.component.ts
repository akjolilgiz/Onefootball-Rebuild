import { Component, OnInit, Input, Output } from '@angular/core';
import { NewsFormComponent } from '../news-form/news-form.component'
import { DetailsComponent } from '../details/details.component'

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent {
  @Input() childArticles;

  constructor() { }

}
