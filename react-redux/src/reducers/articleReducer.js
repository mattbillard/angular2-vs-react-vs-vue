import * as types from '../actions/actionTypes';
import initialState from './initialState';

let newArticle = { id:'', title:'', text:'' };

export default function articleReducer(state = initialState.article, action) {
  switch (action.type) {
    case types.CREATE_ARTICLE_SUCCESS:
      return Object.assign({}, action.article);

    case types.GET_ARTICLE_SUCCESS:
      return Object.assign({}, action.article);

    case types.GET_NEW_ARTICLE:
      return Object.assign({}, newArticle);

    case types.UPDATE_ARTICLE_SUCCESS:
      return Object.assign({}, action.article);

    default:
      return state || Object.assign({}, newArticle);
  }
}
