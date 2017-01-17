import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  WebView
} from 'react-native';

export default class Article extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>

        <View style={styles.date}>
          <Text style={styles.date}>{this.props.date}</Text>
        </View>

        <Text style={styles.body}>{this.props.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    color: "#005263",
    flex: 2,
    fontSize: 32,
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    flex: 17,
    fontSize: 18
  },
  date: {
    flex: 1,
    textAlign: "right",
  }
})
