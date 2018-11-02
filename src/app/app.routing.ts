import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { NewsComponent } from './news/news.component';
import { HomepageComponent } from './homepage/homepage.component'
import { AdminComponent } from './admin/admin.component'
import { NewsFormComponent } from './news-form/news-form.component'
import {YourNewsComponent} from './your-news/your-news.component'

const appRoutes: Routes = [
  {
     path: 'news-form',
     component: NewsFormComponent
   },
   {
      path: 'your-news',
      component: YourNewsComponent
    },
  {
     path: 'admin',
     component: AdminComponent
   },
  {
  path: 'news/:id',
  component: DetailsComponent
  },
  {
    path: 'hopemage',
    component: HomepageComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
