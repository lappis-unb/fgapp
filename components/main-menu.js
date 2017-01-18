import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';

const iconSize = parseInt(Dimensions.get('window').width / 10);

export default class MainMenu extends Component {
  loadScene(sceneKey) {
    this.props.closeDrawerMenu();
    Actions[sceneKey] ({type: 'replace'});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.newsContainer}>
          <TouchableOpacity onPress={() => { this.loadScene('FgaNews'); }}>
            <Icon style={styles.icons} name="newspaper-o" />
          </TouchableOpacity>
        </View>

        <View style={styles.eventsContainer}>
          <TouchableOpacity onPress={() => { this.loadScene('Events'); }}>
            <Icon style={styles.icons} name="calendar" />
          </TouchableOpacity>
        </View>

        <View style={styles.moreContainer}>
          <TouchableOpacity onPress={() => { this.props.toggleDrawerMenu() }}>
            <Icon style={styles.icons} name="bars" />
          </TouchableOpacity>
        </View>

        <View style={styles.professors}>
          <TouchableOpacity onPress={() => { Actions.Professors() }}>
            <Icon name="bars" size={iconSize} color="#333" />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#efefef',
    borderTopWidth: 1
  },

  newsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  eventsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  moreContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  icons: {
    padding: (iconSize/5),
    fontSize: iconSize,
    color: '#333',
    width: (iconSize*1.5),
    textAlign: 'center',
  },

  professors: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
