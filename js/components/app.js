import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
} from 'react-native';

import DrawerMenu from './drawer-menu';
import AppRoutes from './app-routes';
import MainMenu from './main-menu';

// TODO: Fix this workaround. The field `positions` is undefined in tests
let drawerPos = undefined;
if (DrawerLayoutAndroid.positions) {
  drawerPos = DrawerLayoutAndroid.positions.Right;
}

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
{/*
          <DrawerLayoutAndroid
            drawerWidth={300}
            ref={'DRAWER'}
            drawerPosition={drawerPos}
            onDrawerClose={() => { this.setState({drawerIsOpened: false}) }}
            onDrawerOpen={() => { this.setState({drawerIsOpened: true}) }}
            renderNavigationView={() => <DrawerMenu />}>
          </DrawerLayoutAndroid>

*/}
        {/* Main content goes here */}
              <AppRoutes />
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
    backgroundColor: "#FFFFFF"
  },

  mainContentContainer: {
    flex: 9,
  },

  mainMenuContainer: {
    flex: 1,
  }
});
