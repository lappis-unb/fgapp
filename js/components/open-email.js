import React, { Component } from 'react';
import {
  Linking,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class OpenEmail extends Component {
  handleClick = () => {
    Linking.openURL('mailto:' + this.props.email);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handleClick}>
        <View>
          <Text>{this.props.email}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
