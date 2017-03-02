import * as types from './actionTypes';

const articlesUrl = `${window.location.protocol}//${window.location.hostname}:3000/api/articles`;

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
    return $.ajax({
      url: `${articlesUrl}/${articleId}`,
      method: 'DELETE'
    }).then(() => {
      dispatch(deleteArticleSuccess(articleId));
    }).catch(error => {
      throw (error);
    });
  };
}

export function loadArticles() {
  return function(dispatch) {
    return $.ajax({ 
      url: articlesUrl, 
      method: 'GET' 
    }).then(articles => {
      dispatch(loadArticlesSuccess(articles));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveArticle(article) {
  return function (dispatch, getState) {
    if (article.id) {
      return updateArticle(article, dispatch);
    } else {
      return createArticle(article, dispatch);
    }
  };
}

function createArticle(article, dispatch) {
  return $.ajax({
    url: articlesUrl,
    method: 'POST',
    data: article
  })
  .then(article => { dispatch(createArticleSuccess(article)); })
  .catch(error => { throw (error); });
}

function updateArticle(article, dispatch) {
  return $.ajax({
    url: `${articlesUrl}/${article.id}`,
    method: 'PUT',
    data: article
  })
  .then(article => { dispatch(updateArticleSuccess(article)); })
  .catch(error => { throw (error); });
}
