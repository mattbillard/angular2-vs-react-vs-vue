import {combineReducers} from 'redux';
import articles from './articlesReducer';
import article from './articleReducer';

const rootReducer = combineReducers({
  articles,
  article
});

export default rootReducer;
