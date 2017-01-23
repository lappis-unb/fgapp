import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  WebView,
  Linking
} from 'react-native';

export default class Article extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.date}>{this.props.date}</Text>
        </View>

        <View style={styles.bodyContainer}>
          <WebView
            source={{html: this.props.body}}
            ref={(ref) => { this.webview = ref }}
            onNavigationStateChange={(e) => {
              if(e.url != this.props.body) {
                Linking.canOpenURL(e.url).then(supportedLink => {
                  if(supportedLink) {
                    this.webview.stopLoading();
                    Linking.openURL(e.url);
                  }
                })
              }
            }}
          />
        </View>
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

  titleContainer: {
    flex: 7,
    justifyContent: "center",
  },

  title: {
    color: "#005263",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  dateContainer: {
    flex: 2,
  },

  date: {
    textAlign: "right"
  },

  bodyContainer: {
    flex: 17
  }
})
