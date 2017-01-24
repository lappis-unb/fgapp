import { connect } from 'react-redux';
import { ProfessorsService } from '../services';
import FgaProfessors from '../components/fga-professors';

const mapStateToProps = (state) => ({
  professors: state.professors
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfessors: () => {
    ProfessorsService.get()
      .then((response) => response.data)
      .then((data) => {
        const professors = data.people.map(professor => ({
          id: professor.id,
          name: professor.name,
          image: professor.image,
          additional_data: professor.additional_data
        }));

        dispatch({
          type: 'ADD_PROFESSORS',
          professors
        });
      });
  }
});

const FgaProfessorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (FgaProfessors);

export default FgaProfessorsContainer;