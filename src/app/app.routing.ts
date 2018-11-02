import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { NewsComponent } from './news/news.component';


const appRoutes: Routes = [
  {
      path: 'news',
      component: NewsComponent
  },
  {
  path: 'news/:id',
  component: DetailsComponent
}
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
