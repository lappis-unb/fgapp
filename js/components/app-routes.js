import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Events from './events';
import Article from './article';
import Professor from './professor';
import Contact from './contact';
import FgaNews from './fga-news';
import FgaProfessors from './fga-professors';

import AppRoutesContainer from '../containers/app-router-container';

const AppRoutes = ({actualPage}) => (
  <Router>
    <Scene key="FgaNews" component={FgaNews} title='News' hideNavBar={true} initial={actualPage == 'FgaNews'} />
    <Scene key="Events" component={Events} title='Events' hideNavBar={true} />
    <Scene key="Article" component={Article} title='Article' hideNavBar={true} />
    <Scene key="FgaProfessors" component={FgaProfessors} title='Professors' hideNavBar={true} initial={actualPage == 'FgaProfessors'}/>
    <Scene key="Professor" component={Professor} title='Professor' hideNavBar={true} />
    <Scene key="Contact" component={Contact} title='Contact' hideNavBar={true} initial={actualPage == 'Contact'} />
  </Router>
);

export default AppRoutesContainer(AppRoutes);
