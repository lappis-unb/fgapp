import update from 'immutability-helper'; // See: https://github.com/kolodny/immutability-helper
import initialState from '../config/initial-state';


const professorsReducer = (state=initialState.professors, action) => {
  switch(action.type) {
    case 'SET_CLEAR_PROFESSORS_LIST_VIEW':
      return update(state, {
        clearListView: {
          $set: action.clearListView
        }
      });

    case 'ADD_PROFESSORS':
      return update(state, {
        [action.course]: {
          data: {
            $push: action.professors
          }
        },
        currentCourse: {
          $set: action.course
        },
        clearListView: {
          $set: action.clearListView
        }
      });

    case 'SET_PROFESSORS_ERROR':
      return update(state,{
        error: {
          $set: action.error
        }
      });

    default:
      return state;
  }
}

export default professorsReducer;
