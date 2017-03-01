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

  constructor(
    private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService
      .getArticles()
      .then(articles => this.articles = articles);
  }

  delete(article: Article): void {
    this.articlesService
      .delete(article.id)
      .then(() => console.log('Success: article deleted'))
      .catch(error => {
        console.error(error);
      });
  }
}
