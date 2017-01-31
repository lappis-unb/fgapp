import { connect } from 'react-redux';
import ProfessorsService from '../services/professors-service';
import FgaProfessors from '../components/fga-professors';

import { ALL } from '../config/professor-communities';

const mapStateToProps = (state) => ({
  professors: state.professors.data.filter(professor => {
    const displayAll = state.professors.currentCourse === ALL;
    const professorInCurrentCourse = professor.course_id === state.professors.currentCourse;

    return displayAll || professorInCurrentCourse;
  }),

  clearListView: state.professors.clearListView,
  page: state.professors.page,
  lastPage: state.professors.lastPage,
  course: state.professors.currentCourse
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfessors: (id) => {
    dispatch({
      type: 'SET_CLEAR_PROFESSORS_LIST_VIEW',
      clearListView: true
    });

    ProfessorsService.get(id)
      .then((response) => response.data)
      .then((data) => {
        const professors = data.people.map(professor => ({
          id: professor.id,
          name: professor.name,
          image: professor.image,
          additional_data: professor.additional_data,
          course_id: id
        }));

        dispatch({
          type: 'ADD_PROFESSORS',
          professors,
          currentCourse: id,
          clearListView: false
        });
      });
  }
});

const FgaProfessorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (FgaProfessors);

export default FgaProfessorsContainer;
