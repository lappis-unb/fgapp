import { createStore, combineReducers } from 'redux';

import articlesReducer from '../reducers/articles-reducer';
import professorsReducer from '../reducers/professors-reducer';

export const initialState = {
  articles: {
    page: 1,
    lastPage: Infinity,
    data: [],
    error: false
  },
  professors: []
};


const combinedReducers = combineReducers({
  articles: articlesReducer,
  professors: professorsReducer
});

const store = createStore(combinedReducers, initialState);

export default store;
