import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function articleReducer(state = initialState.articles, action) {
  switch (action.type) {
    case types.DELETE_ARTICLE_SUCCESS:
      console.log('--- articleReducer.js: case types.DELETE_ARTICLE_SUCCESS'); 
      return state.filter(article => article.id !== action.articleId);

    case types.GET_ARTICLES_SUCCESS:
      return action.articles;

    default:
      return state;
  }
}
