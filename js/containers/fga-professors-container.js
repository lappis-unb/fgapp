import { connect } from 'react-redux';
import ProfessorsService from '../services/professors-service';
import FgaProfessors from '../components/fga-professors';

import { ALL } from '../config/professor-communities';

const mapStateToProps = (state) => {
  const selectedCourse = state.professors[state.professors.currentCourse];

  return {
    professors: selectedCourse.data,
    page: selectedCourse.page,
    lastPage: selectedCourse.lastPage,
    clearListView: state.professors.clearListView,
    course: state.professors.currentCourse,
    error: state.professors.error
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchProfessors(courseId, page, lastPage) {
    if ( page >= lastPage ) {
      return;
    }

    ProfessorsService.get(courseId, page)
      .then(data => {
        dispatch({
          type: 'ADD_PROFESSORS',
          professors: data.professors,
          course: courseId,
          page,
          lastPage: data.lastPage,
          clearListView: false
        });
      })
      .catch(error => {
        console.error(error);

        dispatch({
          type: 'SET_PROFESSORS_ERROR',
          error: true
        });
      });
  },

  professorsError(error){
    dispatch({
      type: 'SET_PROFESSORS_ERROR',
      error
    })
  },

  changeCourse(courseId) {
    dispatch({
      type: 'CHANGE_CURRENT_COURSE',
      courseId
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
