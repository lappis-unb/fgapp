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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.newsContainer}>
          <TouchableOpacity onPress={() => { Actions.FgaNews() }}>
            <Icon name="newspaper-o" size={iconSize} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.eventsContainer}>
          <TouchableOpacity onPress={() => { Actions.Events() }}>
            <Icon name="calendar" size={iconSize} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.moreContainer}>
          <TouchableOpacity onPress={() => { this.props.toggleDrawerMenu() }}>
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
  }
});
