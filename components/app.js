import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import MainMenu from './main-menu';
import FgaNews from './fga-news';
import Events from './events';
import DrawerMenu from './drawer-menu';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerIsOpened: false
    }

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  toggleDrawer() {
    if (this.state.drawerIsOpened) {
      this.refs['DRAWER'].closeDrawer();
    } else {
      this.refs['DRAWER'].openDrawer();
    }
  }

  closeDrawer() {
    this.refs['DRAWER'].closeDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContentContainer}>
          <DrawerLayoutAndroid
            drawerWidth={300}
            ref={'DRAWER'}
            drawerPosition={DrawerLayoutAndroid.positions.Right}
            onDrawerClose={() => { this.setState({drawerIsOpened: false}) }}
            onDrawerOpen={() => { this.setState({drawerIsOpened: true}) }}
            renderNavigationView={() => <DrawerMenu />}>
              {/* Main content goes here */}
              <Router>
                <Scene key="FgaNews" component={FgaNews} title='News' hideNavBar={true} />
                <Scene key="Events" component={Events} title='Events' hideNavBar={true} />
              </Router>
            </DrawerLayoutAndroid>
        </View>

        <View style={styles.mainMenuContainer}>
          <MainMenu toggleDrawerMenu={this.toggleDrawer} closeDrawerMenu={this.closeDrawer} />
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
