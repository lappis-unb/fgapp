import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Button
} from 'react-native';

import FgaNewsContainer from '../containers/fga-news-container';
import ArticleService from '../services/article-service';
import NewsListItem from './news-list-item';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class FgaNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows([]),
      loading: true
    }

    this.fetchMoreArticles = this.fetchMoreArticles.bind(this);
  }

  componentDidMount() {
    if (this.props.articles.length === 0) {
      this.props.fetchArticles(this.props.page, this.props.lastPage);
    } else {
      // Delay ListView filling for better performance on lower devices
      setTimeout(() => {
        this.updateListView(this.props);
      }, 500);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.props.fetchArticles(nextProps.page, this.props.lastPage);
    }

    this.updateListView(nextProps);
  }

  updateListView(props) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(props.articles),
      loading: (props.articles.length === 0)
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
              authorName={rowData.authorName}
            />;
  }

  updatePageError() {
    this.props.updateError(false);
    this.props.fetchArticles(this.props.page, this.props.lastPage);
  }

  render() {
    return (
      <View style={styles.container}>
        <Choose>
          <When condition={ this.props.error }>
						<View style={styles.error}>
							<Text style={styles.textError}> Ocorreu um erro
							durante o carregamento dos dados!</Text>
								<Button
									onPress={() => {this.updatePageError()}}
									title="Tentar Novamente"
									color="#21ba57"
									accessibilityLabel="Recarregar Dados"
								/>
						</View>
          </When>

          <When condition={ this.state.loading }>
            <ActivityIndicator size={60} color="#21ba57" />
          </When>

          <When condition={ this.props.articles.length > 0 }>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => this.buildRowData(rowData)}
              enableEmptySections={true}
              initialListSize={20}
              onEndReached={this.fetchMoreArticles}
            />
          </When>
        </Choose>
      </View>
    );
  }
}

FgaNews.propTypes = {
  articles: React.PropTypes.array.isRequired,
  page: React.PropTypes.number.isRequired
}

export default FgaNewsContainer (FgaNews);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  textError: {
    maxWidth: 250,
    fontWeight:'bold',
    paddingBottom: 30,
    fontSize: 20,
    textAlign: 'center'
  }
});
