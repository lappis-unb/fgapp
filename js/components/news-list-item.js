import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
import { Card, Button } from 'react-native-material-design';

import { getFirstImageFromBody } from '../services/util';

const imageSize = parseInt(Dimensions.get('window').width);
const monthNames = ["janeiro", "fevereiro", "março", "abril",
                    "maio", "junho", "julho", "agosto",
                    "setembro", "outubro", "novembro", "dezembro"];

export default class NewsListItem extends Component {
  constructor(props) {
    super(props);

    const date = new Date(props.date);

    this.state = {
      day: date.getDate(),
      month: monthNames[date.getMonth()],
      image: getFirstImageFromBody(this.props.body)
    }
  }

  goToArticle() {
    Actions.Article({
      title: this.props.title,
      body: this.props.body,
      date: this.props.date,
      authorName: this.props.authorName
    });
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.goToArticle()}>
        <View style={styles.container}>
            <Card>
              <Card.Body>
                <If condition={ this.state.image !== "" }>
                  <View style={styles.newsImageContainer}>
                    <Image
                      source={{uri: this.state.image}}
                      style={styles.newsImage}
                    />
                  </View>
                </If>
                <View style={styles.newsContentContainer}>
                  <Text style={styles.newsTitle}>{this.props.title}</Text>
                  <Text style={styles.newsDate}>{this.state.day} de {this.state.month}</Text>
                </View>
              </Card.Body>
            </Card>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  newsContainer: {
    flex: 1
  },

  newsImageContainer: {
    backgroundColor: 'white'
  },

  newsImage: {
    flex: 1,
    height: 100,
    resizeMode: 'contain',
    transform: [
      { scaleX: 4 },
      { scaleY: 4 },
      { translateY: 35 }
    ]
  },

  newsContentContainer: {
    flex: 2,
    justifyContent: 'space-between'
  },

  newsTitle: {
    color: '#005263',
    fontWeight: 'bold'
  }
});
