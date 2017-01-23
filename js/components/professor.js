import React, { Component } from 'react';
import OpenEmail from './open-email';
import {
  Linking,
  View,
  StyleSheet,
  Text,
  WebView,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
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
        </View> 

        <View style={styles.body}>
          <View style={styles.titleContainer}>
            <Icon style={styles.titleIcon} name={'envelope'}/>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#eeeeee',
    padding: 10,
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
  email: {
    fontWeight: 'bold',
    fontSize: 21,
    color: 'black'
  },
  body: {
    marginTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'red'
  },
  titleContainer: {
    backgroundColor: 'green'
  },
  descriptionContainer: {
  },
  description: {
    paddingBottom: 10,
    marginBottom: 20,
    color: '#444',
    fontSize: 16,
    textAlign: 'justify'
  },
})
