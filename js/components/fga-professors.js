import React, { Component } from 'react';
import {
  View,
  ListView,
  StyleSheet,
} from 'react-native';

import ProfessorsListItem from './professors-list-item';

import ProfessorsService from '../services/professors-service';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class FgaProfessors extends Component {
  constructor(props) {
    super(props);

   this.state = {
      dataSource: ds.cloneWithRows(props.professors)
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
    if (this.props.professors.length === 0) {
      this.props.fetchProfessors();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.professors)
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
