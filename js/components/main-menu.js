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

const iconSize = parseInt(Dimensions.get('window').width / 15);

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

        <TouchableOpacity
          onPress={() => this.changeScene('FgaNews')}
          style={[styles.newsContainer, this.highlightButton('FgaNews')]}
        >
          <Icon name="newspaper-o" style={styles.iconStyle} />
          <Text style={styles.iconText}>Notícias</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.changeScene('FgaProfessors')}
          style={[styles.professorsContainer, this.highlightButton('FgaProfessors')]}
        >
          <Icon name="address-book-o" style={styles.iconStyle} />
          <Text style={styles.iconText}>Professores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { this.changeScene('Contact') }}
          style={[styles.contactContainer, this.highlightButton('Contact')]}
        >
          <Icon name="plus" style={styles.iconStyle} />
          <Text style={styles.iconText}>Contato</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.changeScene('Links')}
          style={[styles.linksContainer, this.highlightButton('Links')]}
        >
          <Icon name="link" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default MainMenuContainer (MainMenu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#146d43'
  },
  iconStyle: {
    fontSize: iconSize,
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconText: {
    color: 'white',
    fontSize: 12
  },
  newsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  professorsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  linksContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  professorsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  highlightedContainer: {
    borderBottomWidth: 5,
    borderBottomColor: '#fff'
  }
});
