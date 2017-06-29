import { Component, OnInit } from '@angular/core';

import { Article } from '../../classes/article';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

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

  deleteArticle(article: Article): void {
    console.log('--- articles.component.ts: deleteArticle()');

    this.articlesService
      .deleteArticle(article.id)
      .then(() => console.log('Success: article deleted'))
      .catch(error => {
        console.error(error);
      });
  }
}

console.log('--- articles.component.html: (click)="deleteArticle(article);"');
