import { connect } from 'react-redux';
import MainMenu from '../components/main-menu'

const mapStateToProps = (state) => ({
  actualPage: state.pages.actualPage
});

const mapDispatchToProps = (dispatch) => ({
  updateTitle(title){
    dispatch(
      {type: 'UPDATE_PAGE',
       title}
    )
  }
});

const MainMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (MainMenu);

export default MainMenuContainer;
