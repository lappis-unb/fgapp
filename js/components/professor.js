import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  WebView,
  Image,
  ScrollView
} from 'react-native';
import OpenEmail from './open-email';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Professor extends Component {
  render() {
    return (
      <ScrollView style={styles.component}>
        <View style={styles.header}>
          <View style={styles.headerWrapper}>
            <View style={styles.photoContainer}>
              <Image style={styles.photo} source={{uri: this.props.imageUrl}} />
            </View>

            <View style={styles.additionalData}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{this.props.name}</Text>
              </View>
              <View style={styles.emailContainer}>
                <Icon style={styles.emailIcon} name={'envelope'}/>
                <OpenEmail email={this.props.email} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.descriptionContainer}>
            <Text>
              <Icon style={styles.descriptionIcon} name={'graduation-cap'}/>
              <Text style={styles.description}>{this.props.description}</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#eeeeee',
    backgroundColor: '#cdcdcd',
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#cdcdcd',
    backgroundColor: '#eeeeee',
    minHeight: 150,
    maxHeight: 160,
  },
  headerWrapper:{
    flexDirection: 'row',
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  additionalData: {
    flexDirection: 'column',
    flex: 2
  },
  nameContainer: {
    justifyContent: 'center',
    padding: 5,
  },
  name: {
    color: '#005263',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emailIcon: {
    fontSize: 21,
    marginRight: 10,
    color: '#005263',
  },
  body: {
    backgroundColor: '#cdcdcd',
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  descriptionContainer: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 20,
  },
  descriptionIcon: {
    color: '#005263',
    fontSize: 36,
  },
  description: {
    color: '#444',
    fontSize: 16,
  }
})
