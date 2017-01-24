import { createStore, combineReducers } from 'redux';

import { articlesReducer } from '../reducers';

export const initialState = {
  articles: []
};


const combinedReducers = combineReducers({
  articles: articlesReducer
});

const store = createStore(combinedReducers, initialState);

export default store;