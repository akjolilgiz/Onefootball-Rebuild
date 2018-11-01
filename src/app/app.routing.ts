import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { NewsComponent } from './news/news.component';


const appRoutes: Routes = [
  {
      path: 'details',
      component: DetailsComponent
  },
  {
      path: 'news',
      component: NewsComponent
  },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
