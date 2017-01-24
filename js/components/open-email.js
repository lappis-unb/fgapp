import React, { Component } from 'react';
import {
  Linking,
  Text,
  StyleSheet
} from 'react-native';

export default class OpenEmail extends Component {
  handleClick = () => {
    Linking.openURL('mailto:' + this.props.email);
  }

  render() {
    return (
      <Text numberOfLines={1} onPress={this.handleClick} style={styles.text}>{this.props.email}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    width: 200,
    fontWeight: 'bold',
    fontSize: 21,
    color: 'black'
  },
});
