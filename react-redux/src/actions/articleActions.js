import * as types from './actionTypes';
import articleApi from '../api/mockArticlesApi';

export function loadArticlesSuccess(articles) {
  return { type: types.LOAD_ARTICLES_SUCCESS, articles};
}

export function createArticleSuccess(article) {
  return {type: types.CREATE_ARTICLE_SUCCESS, article};
}

export function deleteArticleSuccess(articleId) {
  return {type: types.DELETE_ARTICLE_SUCCESS, articleId};
}

export function updateArticleSuccess(article) {
  return {type: types.UPDATE_ARTICLE_SUCCESS, article};
}

export function deleteArticle(articleId) {
  return function (dispatch, getState) {
    return articleApi.deleteArticle(articleId).then(() => {
      dispatch(deleteArticleSuccess(articleId));
    }).catch(error => {
      throw (error);
    });
  };
}

export function loadArticles() {
  return function(dispatch) {
    return articleApi.getAllArticles().then(articles => {
      dispatch(loadArticlesSuccess(articles));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveArticle(article) {
  return function (dispatch, getState) {
    return articleApi.saveArticle(article).then(article => {
      if (article.id)  {
        dispatch(updateArticleSuccess(article));
      } else {
        dispatch(createArticleSuccess(article));
      }
    }).catch(error => {
      throw(error);
    });
  };
}
