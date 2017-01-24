import update from 'immutability-helper'; // See: https://github.com/kolodny/immutability-helper
import { initialState } from '../config/store';

const articlesReducer = (state=initialState.articles, action) => {
  switch(action.type) {
    case 'ADD_ARTICLES':
      return update(state, {
        data: {
          $push: action.articles
        }
      });

    case 'UPDATE_ARTICLES_PAGE':
      return update(state, {
        page: {
          $set: action.page
        }
      });

    default:
      return state;
  }
};

export default articlesReducer;