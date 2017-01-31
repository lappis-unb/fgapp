import update from 'immutability-helper'; // See: https://github.com/kolodny/immutability-helper
import { initialState } from '../config/store';

const filterProfessorsToAdd = (currentProfessors=[], professorsToAdd=[]) => {
  let professors = [];

  professors = professorsToAdd.filter(professor => {
    let alreadyHasProfessor = currentProfessors.find(current => current.id === professor.id);

    // Add professor if not already has its data
    return !alreadyHasProfessor;
  });

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

    case 'SET_PROFESSORS_PAGE':
      return update(state, {
        page: {
          $set: action.page
        }
      });

    case 'SET_PROFESSORS_LAST_PAGE':
      return update(state, {
        lastPage: {
          $set: action.lastPage
        }
      });

    case 'SET_PROFESSORS_CURRENT_COURSE':
      return update(state, {
        currentCourse: {
          $set: action.course
        }
      });

    case 'ADD_PROFESSORS':
      return update(state, {
        data: {
          $push: filterProfessorsToAdd(state.data, action.professors)
        },
        currentCourse: {
          $set: action.currentCourse
        }
      });

    default:
      return state;
  }
}

export default professorsReducer;
