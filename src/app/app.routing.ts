import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { NewsComponent } from './news/news.component';
import { HomepageComponent } from './homepage/homepage.component'
import { AdminComponent } from './admin/admin.component'
import { NewsFormComponent } from './news-form/news-form.component'
import { TopNewsComponent } from './top-news/top-news.component'
import { OneFootballVideoComponent } from './one-football-video/one-football-video.component'
const appRoutes: Routes = [
  {
     path: 'news-form',
     component: NewsFormComponent
   },
   {
     path: 'videos',
     component: OneFootballVideoComponent
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
    path: 'top-news',
    component: TopNewsComponent
  },
  {
    path: '',
    component: HomepageComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
