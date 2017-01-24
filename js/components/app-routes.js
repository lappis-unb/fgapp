import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Events from './events';
import Article from './article';
import FgaProfessors from './fga-professors';
import Professor from './professor';

import { FgaNewsContainer } from '../containers';

const AppRoutes = () => (
  <Router>
    <Scene key="FgaNews" component={FgaNewsContainer} title='News' hideNavBar={true} />
    <Scene key="Events" component={Events} title='Events' hideNavBar={true} />
    <Scene key="Article" component={Article} title='Article' hideNavBar={true} />
    <Scene key="FgaProfessors" component={FgaProfessors} title='Professors' hideNavBar={true} />
    <Scene key="Professor" component={Professor} title='Professor' hideNavBar={true} />
  </Router>
);

export default AppRoutes;
