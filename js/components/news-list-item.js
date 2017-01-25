import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
import { Card, Button } from 'react-native-material-design';

const imageSize = parseInt(Dimensions.get('window').width / 5);
const monthNames = ["janeiro", "fevereiro", "março", "abril",
                    "maio", "junho", "julho", "agosto",
                    "setembro", "outubro", "novembro", "dezembro"];

export default class NewsListItem extends Component {
  constructor(props) {
    super(props);

    const date = new Date(props.date);

    this.state = {
      day: date.getDate(),
      month: monthNames[date.getMonth()]
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
                  <View style={styles.newsContainer}>
                    <View style={styles.newsContent}>
                      <Text style={styles.newsTitle}>{this.props.title}</Text>
                      <Text style={styles.newsDate}>{this.state.day} de {this.state.month}</Text>
                    </View>
                    <View style={styles.newsImageContainer}>
                      <Text>
                        <Icon name="picture-o" style={styles.newsImagePlaceholder} />
                      </Text>
                    </View>
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
    justifyContent: 'center',
    flexDirection: 'row'
  },

  newsContent: {
    flex: 2,
    justifyContent: 'space-between'
  },

  newsImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  newsImagePlaceholder: {
    flex: 1,
    fontSize: imageSize,
    color: '#a29d9d'
  },

  newsTitle: {
    color: '#005263',
    fontWeight: 'bold'
  }
});
