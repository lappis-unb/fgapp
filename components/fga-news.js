import React, { Component } from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const fakeData = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  date: '2017/01/17 11:43:04',
  summary: 'Duis pretium augue ante, eu luctus quam sollicitudin a fames ac in faucibus . Vivamus ac ultrices libero. Praesent nec auctor mauris'
}

export default class FgaNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows([1,2,3,4,5,6,7,8,9,10]) // just to have 10 rows on the prototype
    }
  }

  buildRowData(rowData) {
    return <NewsListItem
              title={fakeData.title}
              date={fakeData.date}
              summary={fakeData.summary} />;
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
      day: date.getDay(),
      month: month.toLocaleUpperCase().split(' ')[1].substr(0, 3)
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', height: 70, margin: 5, marginBottom: 10, borderWidth: 1, padding: 5}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style={{color: '#000000', fontSize: 18}}>{this.state.day}</Text>
          </View>

          <View style={{flex: 1}}>
            <Text style={{color: '#000000'}}>{this.state.month}</Text>
          </View>
        </View>

        <View style={{flex: 4, justifyContent: 'center'}}>
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
