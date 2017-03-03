import { createStore, combineReducers } from 'redux';

import articlesReducer from '../reducers/articles-reducer';
import professorsReducer from '../reducers/professors-reducer';
import pagesReducer from '../reducers/pages-reducer';

import { ALL } from './professor-communities';

export const initialState = {
  articles: {
    page: 1,
    lastPage: Infinity,
    data: [],
    error: false
  },

  professors: {
    clearListView: false,
    page: 1,
    lastPage: Infinity,
    data: [],
    currentCourse: ALL,
    error: false
  },

  pages: {
    actualPage: 'FgaNews'
  }
};


const combinedReducers = combineReducers({
  articles: articlesReducer,
  professors: professorsReducer,
  pages: pagesReducer
});

const store = createStore(combinedReducers, initialState);

export default store;
