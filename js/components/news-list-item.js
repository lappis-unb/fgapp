import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class NewsListItem extends Component {
  constructor(props) {
    super(props);


    const date = new Date(props.date),
        locale = "pt-BR",
        month = date.toLocaleString(locale, { month: "long" });

    this.state = {
      day: date.getDate(),
      month: month.toLocaleUpperCase().split(' ')[1].substr(0, 3)
    }
  }

  goToArticle() {
    Actions.Article({
      title: this.props.title,
      body: this.props.body,
      date: this.props.date
    });
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.goToArticle()}>
        <View style={styles.container}>
          <View style={styles.dateContainer}>
            <View style={styles.day}>
              <Text style={styles.dayText}>{this.state.day}</Text>
            </View>

            <View style={styles.month}>
              <Text style={styles.monthText}>{this.state.month}</Text>
            </View>
          </View>

          <View style={styles.newsContainer}>
            <View style={styles.title}>
              <Text numberOfLines={1} style={styles.titleText}>{this.props.title}</Text>
            </View>

            <View style={styles.summary}>
              <Text numberOfLines={2} style={styles.summaryText}>{this.props.summary}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4e4',
    flexDirection: 'row',
    height: 70,
    margin: 5,
    marginBottom: 15,
    padding: 5
  },

  dateContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginRight: 10,
  },

  day: {
    flex: 1
  },

  month: {
    flex: 1
  },

  dayText: {
    color: '#000000',
    fontSize: 18
  },

  monthText: {
    color: '#000000'
  },

  newsContainer: {
    flex: 5,
    justifyContent: 'center'
  },

  title: {
    flex: 1
  },

  titleText: {
    color: '#000000',
    fontWeight: '800',
    fontSize: 16
  },

  summary: {
    flex: 2,
    marginTop: 5
  },

  summaryText: {
    color: '#444',
    fontSize: 12
  }
});
