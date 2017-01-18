import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import MainMenu from './main-menu';
import FgaNews from './fga-news';
import Events from './events';
import MoreMenu from './more-menu';
import Article from './article';
import Professors from './professors';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContentContainer}>
          <Router>
            <Scene key="FgaNews" component={FgaNews} title='Notícias' hideNavBar={true} />
            <Scene key="Events" component={Events} title='Eventos' hideNavBar={true} />
            <Scene key="MoreMenu" component={MoreMenu} title='Mais opções' hideNavBar={true} />
            <Scene key="Article" component={Article} title='Artigo' hideNavBar={true} />
            <Scene key="Professors" component={Professors} title='Professores' hideNavBar={true} />
          </Router>
        </View>

        <View style={styles.mainMenuContainer}>
          <MainMenu />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainContentContainer: {
    flex: 9,
  },

  mainMenuContainer: {
    flex: 1,
  }
});
