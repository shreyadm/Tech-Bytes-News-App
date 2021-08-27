import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPage } from './news.page';
import { NewsItemPageModule } from '../news-item/news-item.module';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  },
  {
    path: 'news-item',
    loadChildren: () => import('../news-item/news-item.module').then( m => m.NewsItemPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
