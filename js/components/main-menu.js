import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
import MainMenuContainer from '../containers/main-menu-container';

const iconSize = parseInt(Dimensions.get('window').width / 10);

class MainMenu extends Component {
  changeScene(sceneKey) {
    Actions[sceneKey] ({type: 'replace'});
    this.props.updateTitle(sceneKey);
  }

  highlightButton(page) {
    return this.props.actualPage === page ? styles.highlightedContainer : undefined;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.newsContainer, this.highlightButton('FgaNews')]}>
          <TouchableOpacity onPress={() => this.changeScene('FgaNews')}>
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
        <View style={[styles.professorsContainer, this.highlightButton('FgaProfessors')]}>
          <TouchableOpacity onPress={() => this.changeScene('FgaProfessors')}>
            <Icon name="users" style={styles.iconStyle} />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default MainMenuContainer (MainMenu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#009b37'
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
    justifyContent: 'center',
  },

  highlightedContainer: {
    borderBottomWidth: 5,
    borderBottomColor: '#fff'
  }

});

{/*
  moreContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
*/}
