import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    actualPage: state.pages.actualPage
  }
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
