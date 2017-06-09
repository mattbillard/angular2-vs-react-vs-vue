import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

import { Article } from '../../classes/article';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getArticleById();
      } else {
        this.article = new Article();
      }
    });
  }

  getArticleById() {
    this.route.params
      .switchMap((params: Params) => this.articlesService.getArticleById(+params['id']))
      .subscribe(article => this.article = article);
  }

  goToArticles(): void {
    this.router.navigate(['/articles']);
  }

  saveArticle(): void {
    this.articlesService.saveArticle(this.article)
      .then(() => {
        console.log('Success: article saved');
        this.goToArticles();
      })
      .catch(error => {
        console.error(error);
      });
  }
}
