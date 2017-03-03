import update from 'immutability-helper'; // Doc on: https://github.com/kolodny/immutability-helper
import initialState from '../config/initial-state';

const filterProfessorsToAdd = (state, professorsToAdd=[]) => {
  const currentProfessors = state[state.currentCourse].data;
  let professors = currentProfessors.concat(professorsToAdd);

  // Removes repeated professors
  professors = professors.reduce((accumulator, professor) => {
    const index = accumulator.findIndex(p => p.id === professor.id);

    if (index === -1) {
      accumulator.push(professor);
    }

    return accumulator;
  }, []);

  return professors;
}


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
            $set: filterProfessorsToAdd(state, action.professors)
          }
        },
        currentCourse: {
          $set: action.course
        },
        page: {
          $set: action.page
        },
        lastPage: {
          $set: action.lastPage
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

    case 'CHANGE_CURRENT_COURSE':
      return update(state, {
        currentCourse: {
          $set: action.courseId
        }
      });

    default:
      return state;
  }
}

export default professorsReducer;
