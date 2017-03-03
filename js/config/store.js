import { createStore, combineReducers } from 'redux';

import articlesReducer from '../reducers/articles-reducer';
import professorsReducer from '../reducers/professors-reducer';
import pagesReducer from '../reducers/pages-reducer';

import { ALL } from './professor-communities';
import initialState from './initial-state';


const combinedReducers = combineReducers({
  articles: articlesReducer,
  professors: professorsReducer,
  pages: pagesReducer
});

const store = createStore(combinedReducers, initialState);

export default store;
