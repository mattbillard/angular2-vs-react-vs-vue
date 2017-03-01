import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function articleReducer(state = initialState.articles, action) {
  switch (action.type) {
    case types.LOAD_ARTICLES_SUCCESS:
      return action.articles;

    case types.CREATE_ARTICLE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.article)
      ];

    case types.DELETE_ARTICLE_SUCCESS:
      return state.filter(article => article.id !== action.articleId);

    case types.UPDATE_ARTICLE_SUCCESS:
      return [
        ...state.filter(article => article.id !== action.article.id),
        Object.assign({}, action.article)
      ];

    default:
      return state;
  }
}
