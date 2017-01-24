import { initialState } from '../config/store';

const articlesReducer = (state=initialState.articles, action) => {
  switch(action.type) {
    case 'ADD_ARTICLES':
      return [...state, ...action.articles];

    default:
      return state;
  }
};

export default articlesReducer;