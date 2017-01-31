import update from 'immutability-helper'; // See: https://github.com/kolodny/immutability-helper
import { initialState } from '../config/store';

import { ALL } from '../config/professor-communities';

// Dont add already added professors and
// update course_id if it is ALL
const filterProfessorsToAdd = (currentProfessors=[], professorsToAdd=[]) => {
  let professors = currentProfessors.concat(professorsToAdd);

  professors = professors.reduce((accumulator, professor) => {
    let index = accumulator.findIndex(item => item.id === professor.id);

    if (index === -1) {
      // Just add if we dont have it
      accumulator.push(professor);
    } else if(index !== -1 && professor.course_id !== ALL) {
      // Update course_id if it is actualy ALL
      accumulator[index].course_id = professor.course_id;
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
          $set: filterProfessorsToAdd(state.data, action.professors)
        },
        currentCourse: {
          $set: action.currentCourse
        },
        clearListView: {
          $set: action.clearListView
        }
      });

    default:
      return state;
  }
}

export default professorsReducer;
