import React, { Component } from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class FgaNews extends Component {
  constructor(props) {
    super(props);

   this.state = {
      dataSource: ds.cloneWithRows([]) // just to have 10 rows on the prototype
    }
  }

  buildRowData(rowData) {
    return <NewsListItem
              title={rowData.title}
              date={rowData.created_at}
              summary={"This month in World War II, Hitler was killed."} />;
  }

  componentDidMount() {
    fetch('https://fga.unb.br/api/v1/articles?parent_id=46')
      .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            dataSource: ds.cloneWithRows(responseJson.articles)
          });
        });
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.buildRowData(rowData) }
        />
      </View>
    );
  }
}


// Component here just for prototype simplification
class NewsListItem extends Component {
  constructor(props) {
    super(props);

    const date = new Date(props.date),
        locale = "pt",
        month = date.toLocaleString(locale, { month: "long" });

    this.state = {
      day: date.getDate(),
      month: month.toLocaleUpperCase().split(' ')[1].substr(0, 3)
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#e4e4e4' ,flexDirection: 'row', height: 70, margin: 5, marginBottom: 15, padding: 5}}>
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#ffffff', marginRight: 5}}>
          <View style={{flex: 1}}>
            <Text style={{color: '#000000', fontSize: 18}}>{this.state.day}</Text>
          </View>

          <View style={{flex: 1}}>
            <Text style={{color: '#000000'}}>{this.state.month}</Text>
          </View>
        </View>

        <View style={{flex: 5, justifyContent: 'center'}}>
          <View style={{flex: 1}}>
            <Text numberOfLines={1} style={{color: '#000000', fontWeight: '800', fontSize: 18}}>{this.props.title}</Text>
          </View>

          <View style={{flex: 2, marginTop: 5}}>
            <Text numberOfLines={2} style={{color: '#444', fontSize: 12}}>{this.props.summary}</Text>
          </View>
        </View>
      </View>
    );
  }
}
