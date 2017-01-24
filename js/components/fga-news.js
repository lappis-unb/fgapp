import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { ArticleService } from '../services';
import NewsListItem from './news-list-item';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class FgaNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows(props.articles)
    }

    this.fetchMoreArticles = this.fetchMoreArticles.bind(this);
  }

  componentDidMount() {
    if (this.props.articles.length === 0) {
      this.props.fetchArticles(this.props.page);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.props.fetchArticles(nextProps.page);
    }

    this.setState({
      dataSource: ds.cloneWithRows(nextProps.articles),
    });
  }

  fetchMoreArticles() {
    this.props.updatePage(this.props.page + 1);
  }

  buildRowData(rowData) {
    return <NewsListItem
              title={rowData.title}
              date={rowData.created_at}
              body={rowData.body}
              summary={"This month in World War II, Hitler was killed."} />;
  }

  getContent() {
    let content = '';

    if (this.props.articles.length === 0) {
      content = <ActivityIndicator size={60} color="#21ba57" />;
    } else {
      content = <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => this.buildRowData(rowData)}
                  enableEmptySections={true}
                  initialListSize={20}
                  onEndReached={this.fetchMoreArticles}
                />
    }

    return content;
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
        {this.getContent()}
      </View>
    );
  }
}

FgaNews.propTypes = {
  articles: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string,
      created_at: React.PropTypes.string,
      body: React.PropTypes.string
    }).isRequired
  ),

  page: React.PropTypes.number.isRequired
}