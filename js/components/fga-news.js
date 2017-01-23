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
      dataSource: ds.cloneWithRows([]),
      loadingArticles: true
    }
  }

  buildRowData(rowData) {
    return <NewsListItem
              title={rowData.title}
              date={rowData.created_at}
              body={rowData.body}
              summary={"This month in World War II, Hitler was killed."} />;
  }

  componentDidMount() {
    ArticleService.get(46)
      .then(response => response.data)
      .then((response) => {
        this.setState({
          dataSource: ds.cloneWithRows(response.articles),
          loadingArticles: false
        });
      });
  }

  render() {
    let content = "";

    if (this.state.loadingArticles) {
      content = <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <ActivityIndicator size={60} color="#21ba57" />
                </View>

    } else {
      content = <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => this.buildRowData(rowData)}
                  enableEmptySections={true}
                />
    }

    return (
      <View style={{flex: 1}}>
        {content}
      </View>
    );
  }
}
