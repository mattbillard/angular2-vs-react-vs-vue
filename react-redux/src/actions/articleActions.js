import axios from 'axios'
import * as types from './actionTypes';

const ARTICLES_URL = `${window.location.protocol}//${window.location.hostname}:3000/api/articles`;


function createArticle(article, dispatch) {
  return axios.post(ARTICLES_URL, article)
  .then(response => dispatch({type: types.CREATE_ARTICLE_SUCCESS, article: responsde.data}))
  .catch(error => console.error(error));
}

function updateArticle(article, dispatch) {
  return axios.put(`${ARTICLES_URL}/${article.id}`, article)
  .then(response => dispatch({type: types.UPDATE_ARTICLE_SUCCESS, article: responsde.data}))
  .catch(error => console.error(error));
}


export function deleteArticle(articleId) {
  return function (dispatch, getState) {
    console.log('--- articleActions.js: deleteArticle()');

    return axios.delete(`${ARTICLES_URL}/${articleId}`)
    .then(() => dispatch({type: types.DELETE_ARTICLE_SUCCESS, articleId}))
    .catch(error => console.error(error));
  };
}

export function getArticleById(articleId) {
  return function(dispatch) {
    return axios.get(`${ARTICLES_URL}/${articleId}`)
    .then(response => dispatch({ type: types.GET_ARTICLE_SUCCESS, article: response.data}))
    .catch(error => console.error(error));
  };
}

export function getNewArticle() {
  return function(dispatch) {
    dispatch({ type: types.GET_NEW_ARTICLE });
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
