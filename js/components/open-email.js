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
    let emailLink;
    if(this.props.email === undefined){
      emailLink = (
        <Text numberOfLines={1} style={styles.text}>Não disponível.</Text>
      )
    }else{
      emailLink = (
        <Text numberOfLines={1} onPress={this.handleClick} style={styles.text}>{this.props.email}</Text>
      )
    }
    return (
      <View>
        { emailLink }
      </View>
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
