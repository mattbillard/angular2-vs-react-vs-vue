import { Component, OnInit } from '@angular/core';

import { Article } from '../../classes/article';
import { ArticlesService } from '../../services/articles.service';

@Component({
  moduleId: module.id,
  selector: 'articles',
  templateUrl: './articles.component.html',
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  console = console;

  constructor(
    private articlesService: ArticlesService) {
    console.log('--- articles.component.ts: private articlesService: ArticlesService"');
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService
      .getArticles()
      .then(articles => this.articles = articles);
  }

  delete(article: Article): void {
    console.log('--- articles.component.ts: delete()');

    this.articlesService
      .delete(article.id)
      .then(() => console.log('Success: article deleted'))
      .catch(error => {
        console.error(error);
      });
  }
}

console.log('--- articles.component.html: (click)="delete(article);"');
