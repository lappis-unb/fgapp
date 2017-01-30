import React, { Component } from 'react';
import {
  View,
  ListView,
  StyleSheet,
  Picker
} from 'react-native';

import ProfessorsListItem from './professors-list-item';

import ProfessorsService from '../services/professors-service';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class FgaProfessors extends Component {
  constructor(props) {
    super(props);

   this.state = {
      dataSource: ds.cloneWithRows(props.professors),
      engineering: "35",
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
      this.props.fetchProfessors(this.state.engineering);
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
        <Picker selectedValue={this.state.engineering}
                onValueChange={(course) => {
                  this.props.fetchProfessors(course)
                  this.setState({engineering: course})
          }}>
          <Picker.Item label="Todos" value="35" />
          <Picker.Item label="Engenharia Aeroespacial" value="38" />
          <Picker.Item label="Engenharia Automotiva" value="41" />
          <Picker.Item label="Engenharia de Energia" value="39" />
          <Picker.Item label="Engenharia Eletrônica" value="40" />
          <Picker.Item label="Engenharia de Software" value="37" />
        </Picker>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.buildRowData(rowData) }
          enableEmptySections={true}
        />
      </View>
    );
  }
}
