import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  WebView,
  Image,
  ScrollView
} from 'react-native';

export default class Professor extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.photoContainer}>
          <Image style={styles.photo} source={{uri: this.props.imageUrl}} />
        </View>
        <View style={styles.name}>
          <Text style={styles.name}>{this.props.name}</Text>
        </View>

        <View style={styles.email}>
          <Text style={styles.email}>{this.props.email}</Text>
        </View>

        <Text style={styles.description}>{this.props.description}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  },

  photoContainer: {
    alignItems: "center",
  },

  photo: {
    width: 100,
    height: 100,
    borderRadius: 100
  },

  name: {
    color: "#005263",
    flex: 5,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center"
  },

  email: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },

  description: {
    fontSize: 18,
    paddingBottom: 10,
    marginBottom: 20,
  }
})
