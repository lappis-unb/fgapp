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
          <TouchableOpacity onPress={() => { Actions.FgaNews({type: 'replace'}) }}>
            <Icon name="newspaper-o" style={styles.iconStyle} />
          </TouchableOpacity>
        </View>

{/*
        <View style={styles.eventsContainer}>
          <TouchableOpacity onPress={() => { Actions.Events({type: 'replace'}) }}>
            <Icon name="calendar" style={styles.iconStyle} />
          </TouchableOpacity>
        </View>

        <View style={styles.moreContainer}>
          <TouchableOpacity onPress={() => { this.props.toggleDrawerMenu() }}>
            <Icon name="bars" style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
*/}

        <View style={styles.professorsContainer}>
          <TouchableOpacity onPress={() => { Actions.FgaProfessors({type: 'replace'}) }}>
            <Icon name="users" style={styles.iconStyle} />
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
    backgroundColor: '#009b37',
  },

  iconStyle: {
    fontSize: iconSize,
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
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

  professorsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

{/*
  moreContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
*/}
