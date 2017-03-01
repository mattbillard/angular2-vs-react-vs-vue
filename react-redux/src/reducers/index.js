import {combineReducers} from 'redux';
import articles from './articleReducer';

const rootReducer = combineReducers({
  articles
});

export default rootReducer;
