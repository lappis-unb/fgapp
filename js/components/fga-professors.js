import React, { Component } from 'react';
import {
  View,
  ListView,
  StyleSheet,
} from 'react-native';

import { ProfessorsListItem } from '.';

import { ProfessorsService } from '../services';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class FgaProfessors extends Component {
  constructor(props) {
    super(props);

   this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  buildRowData(rowData) {
    return <ProfessorsListItem
              name={rowData.name}
              image={rowData.image}
              additional_data={rowData.additional_data}
           />
  }

  componentDidMount() {
    ProfessorsService.get()
      .then((response) => response.data)
      .then((responseJson) => {
        this.setState({
          dataSource: ds.cloneWithRows(responseJson.people)
        });
      });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.buildRowData(rowData) }
          enableEmptySections={true}
        />
      </View>
    );
  }
}
