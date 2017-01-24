import { createStore, combineReducers } from 'redux';

import {
  articlesReducer,
  professorsReducer
} from '../reducers';

export const initialState = {
  articles: {
    page: 1,
    data: []
  },
  professors: []
};


const combinedReducers = combineReducers({
  articles: articlesReducer,
  professors: professorsReducer
});

const store = createStore(combinedReducers, initialState);

export default store;