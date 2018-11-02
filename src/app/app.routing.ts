import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { NewsComponent } from './news/news.component';
import { HomepageComponent } from './homepage/homepage.component'
import { AdminComponent } from './admin/admin.component'

const appRoutes: Routes = [
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
