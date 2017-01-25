import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  WebView,
  Linking
} from 'react-native';

const baseURL = "https://fga.unb.br";

export default class Article extends Component {

  constructor(props) {
    super(props);

    this.state = {
      parsedBody: this.parseImageLink(this.props.body)
    }
  }

  parseImageLink(text) {
    var curIdx = 0;
    var prevIdx = -1;

    while (true) {
      curIdx = text.indexOf('img', prevIdx + 1);

      if (curIdx === -1) {
        break;
      }

      prevIdx = curIdx;
      var first = text.substr(0, curIdx + 9);
      var second = text.substr(curIdx + 9, text.length - curIdx);
      text = first + baseURL + second;
    }

    return text;
  }

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
            source={{html: this.state.parsedBody}}
            ref={(ref) => { this.webview = ref }}
            onNavigationStateChange={(e) => {
              if(e.url != this.state.parsedBody) {
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
