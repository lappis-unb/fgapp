import React, { Component } from 'react';
import {
  Linking,
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class OpenEmail extends Component {
  handleClick = () => {
      Linking.openURL('mailto:' + this.props.email);
  }

  render() {
    return (
      <View style={styles.emailWrapper}>
        <If condition={ this.props.email === undefined }>
          <Text numberOfLines={1} style={styles.text}>Não disponível.</Text>
        </If >

        <If condition={ this.props.email !== undefined }>
          <Text numberOfLines={1} onPress={this.handleClick} style={styles.text}>{this.props.email}</Text>
        </If >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 21,
    color: 'black'
  },

  emailWrapper: {
    flex: 1
  }
});
