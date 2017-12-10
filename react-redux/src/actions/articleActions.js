import * as types from './actionTypes';

const ARTICLES_URL = `${window.location.protocol}//${window.location.hostname}:3000/api/articles`;


function createArticle(article, dispatch) {
  return $.ajax({
    url: ARTICLES_URL,
    method: 'POST',
    data: article
  })
  .then(article => dispatch({type: types.CREATE_ARTICLE_SUCCESS, article}))
  .catch(error => console.error(error));
}

function updateArticle(article, dispatch) {
  return $.ajax({
    url: `${ARTICLES_URL}/${article.id}`,
    method: 'PUT',
    data: article
  })
  .then(article => dispatch({type: types.UPDATE_ARTICLE_SUCCESS, article}))
  .catch(error => console.error(error));
}


export function deleteArticle(articleId) {
  return function (dispatch, getState) {
    console.log('--- articleActions.js: deleteArticle()');

    return $.ajax({
      url: `${ARTICLES_URL}/${articleId}`,
      method: 'DELETE'
    })
    .then(() => dispatch({type: types.DELETE_ARTICLE_SUCCESS, articleId}))
    .catch(error => console.error(error));
  };
}

export function getArticleById(articleId) {
  return function(dispatch) {
    return $.ajax({ 
      url: `${ARTICLES_URL}/${articleId}`,
      method: 'GET' 
    })
    .then(article => dispatch({ type: types.GET_ARTICLE_SUCCESS, article}))
    .catch(error => console.error(error));
  };
}

export function getNewArticle() {
  return function(dispatch) {
    dispatch({ type: types.GET_NEW_ARTICLE });
  }
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
