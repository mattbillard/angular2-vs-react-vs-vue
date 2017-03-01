import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import ArticlesPage from './components/articles/ArticlesPage';
import ArticlePage from './components/article/ArticlePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/articles" />
    <Route path="articles" component={ArticlesPage} />
    <Route path="article" component={ArticlePage} />
    <Route path="article/:id" component={ArticlePage} />
  </Route>
);
