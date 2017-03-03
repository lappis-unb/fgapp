import update from 'immutability-helper'; // See: https://github.com/kolodny/immutability-helper
import initialState from '../config/initial-state';

const articlesReducer = (state=initialState.articles, action) => {
  switch(action.type) {
    case 'ADD_ARTICLES':
      return update(state, {
        data: {
          $push: action.articles
        },

        lastPage: {
          $set: action.lastPage
        }
      });

    case 'UPDATE_ARTICLES_PAGE':
      return update(state, {
        page: {
          $set: action.page
        }
      });

    case 'UPDATE_ARTICLES_LAST_PAGE':
      return update(state, {
        lastPage: {
          $set: action.lastPage
        }
      });

    case "SET_ARTICLES_ERROR":
      return update(state,{
        error:{
          $set: action.error
        }
      });

    default:
      return state;
  }
};

export default articlesReducer;
