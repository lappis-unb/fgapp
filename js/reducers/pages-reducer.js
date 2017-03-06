import update from 'immutability-helper'; // See: https://github.com/kolodny/immutability-helper
import initialState from '../config/initial-state';

const pagesReducer = (state=initialState.pages, action) => {
  switch(action.type) {
    case 'UPDATE_PAGE':
      return update(state, {
        actualPage: {
          $set: action.title
        }
    });

    default:
      return state;
  }
}

export default pagesReducer;
