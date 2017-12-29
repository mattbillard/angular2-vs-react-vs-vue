import axios from 'axios'
import * as types from './actionTypes';

const ARTICLES_URL = `${window.location.protocol}//${window.location.hostname}:3000/api/articles`;


export function deleteArticle(articleId) {
  return function (dispatch, getState) {
    console.log('--- articleActions.js: deleteArticle()');

    return axios.delete(`${ARTICLES_URL}/${articleId}`)
    .then(() => dispatch({type: types.DELETE_ARTICLE_SUCCESS, articleId}))
    .catch(error => console.error(error));
  };
}

export function getArticles() {
  return function(dispatch) {
    return axios.get(ARTICLES_URL)
    .then(response => dispatch({ type: types.GET_ARTICLES_SUCCESS, articles: response.data}))
    .catch(error => console.error(error));
  };
}
