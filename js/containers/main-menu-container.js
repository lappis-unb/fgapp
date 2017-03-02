import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    actualPage: state.pages.actualPage
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    updateTitle(title){
      dispatch(
        {type: 'UPDATE_PAGE',
        title}
      )
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
