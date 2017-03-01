import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from '../articles/components/articles/articles.component';
import { ArticleComponent } from '../articles/components/article/article.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article/:id', component: ArticleComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
