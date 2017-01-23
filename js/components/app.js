import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid
} from 'react-native';

import {
  MainMenu,
  DrawerMenu,
  AppRoutes
} from '.';


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
              <AppRoutes />
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
