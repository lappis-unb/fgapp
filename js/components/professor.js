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
      <View style={styles.component}>
        <View style={styles.header}>
          <View style={styles.headerWrapper}>
            <View style={styles.photoContainer}>
              <Image style={styles.photo} source={{uri: this.props.imageUrl}} />
            </View>
            <View style={styles.additionalData}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{this.props.name}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.emailInfo}>
          <View style={styles.emailContainer}>
            <OpenEmail email={this.props.email} />
          </View>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.descriptionContainer}>
                <Icon style={styles.descriptionIcon} name={'graduation-cap'}/>
                <Text style={styles.description}>{this.props.description}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#cdcdcd',
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#1ca95b',
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameContainer: {
    padding: 5
  },
  name: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold'
  },
  emailInfo: {
    backgroundColor: '#1ca95b',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  emailIcon: {
    fontSize: 21,
    marginRight: 10,
    color: 'white',
  },
  body: {
    flex: 1,
    paddingTop: 12,
    paddingLeft: 5,
    paddingRight: 5,
  },
  descriptionContainer: {
    backgroundColor: 'white',
    padding: 12,
    marginBottom: 12
  },
  descriptionIcon: {
    color: '#005263',
    fontSize: 21,
    alignSelf: 'flex-end'
  },
  description: {
    color: '#444',
    fontSize: 16,
  }
})
