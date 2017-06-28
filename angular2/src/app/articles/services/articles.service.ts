import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Article } from '../classes/article';

@Injectable()
export class ArticlesService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private articlesUrl = `${window.location.protocol}//${window.location.hostname}:3000/api/articles`;
  private articles: Article[];

  constructor(private http: Http) { }

  deleteArticle(id: number): Promise<void> {
    console.log('--- articles.service.ts: deleteArticle()');
    
    const url = `${this.articlesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => {
        let idx = this.articles.findIndex((article) => article.id === id);
        this.articles.splice(idx, 1);
      })
      .catch(this.handleError);
  }

  getArticles(): Promise<Article[]> {
    return this.http.get(this.articlesUrl)
      .toPromise()
      .then(response => {
        this.articles = response.json() as Article[];
        return this.articles;
      })
      .catch(this.handleError);
  }

  getArticleById(id: number): Promise<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Article)
      .catch(this.handleError);
  }

  saveArticle(article: Article): Promise<Article> {
    if (article.id) {
      return this.update(article);
    } else {
      return this.create(article);
    }
  }

  private create(article: Article): Promise<Article> {
    return this.http
      .post(this.articlesUrl, JSON.stringify(article), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private update(article: Article): Promise<Article> {
    const url = `${this.articlesUrl}/${article.id}`;
    return this.http
      .put(url, JSON.stringify(article), { headers: this.headers })
      .toPromise()
      .then(() => article)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
