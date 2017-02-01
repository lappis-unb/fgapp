import React, { Component } from 'react';
import {
  Linking,
  Text,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class OpenEmail extends Component {
  handleClick = () => {
      Linking.openURL('mailto:' + this.props.email);
  }

  render() {
    return (
      <View style={styles.emailWrapper}>
        <If condition={ this.props.email === undefined }>
          <Icon style={styles.descriptionIcon} name={'envelope'}/>
          <Text numberOfLines={1} style={styles.text}>Não disponível.</Text>
        </If >

        <If condition={ this.props.email !== undefined }>
          <Icon style={styles.descriptionIcon} name={'envelope'}/>
          <Text numberOfLines={1} onPress={this.handleClick} style={styles.text}>{this.props.email}</Text>
        </If >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginLeft: 10
  },
  descriptionIcon: {
    color: 'white',
    fontSize: 16
  },
  emailWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
