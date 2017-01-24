import { initialState } from '../config/store';

const professorsReducer = (state=initialState.professors, action) => {
  switch(action.type) {
    case 'ADD_PROFESSORS':
      return [...state, ...action.professors];

    default:
      return state;
  }
}

export default professorsReducer;