import update from 'immutability-helper'; // See: https://github.com/kolodny/immutability-helper
import { initialState } from '../config/store';

const professorsReducer = (state=initialState.professors, action) => {
  switch(action.type) {
    case 'ADD_PROFESSORS':
      return update(state, {
        $set: action.professors
      })

    default:
      return state;
  }
}

export default professorsReducer;
