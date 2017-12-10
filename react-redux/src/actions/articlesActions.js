import * as types from './actionTypes';

const ARTICLES_URL = `${window.location.protocol}//${window.location.hostname}:3000/api/articles`;


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

export function getArticles() {
  return function(dispatch) {
    return $.ajax({ 
      url: ARTICLES_URL, 
      method: 'GET' 
    })
    .then(articles => dispatch({ type: types.GET_ARTICLES_SUCCESS, articles}))
    .catch(error => console.error(error));
  };
}
