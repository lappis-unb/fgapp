import React, { Component } from 'react';
import {
  View,
  ListView,
  StyleSheet,
  Picker
} from 'react-native';

import ProfessorsListItem from './professors-list-item';

import ProfessorsService from '../services/professors-service';

import communitiesId from '../config/professor-communities';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class FgaProfessors extends Component {
  constructor(props) {
    super(props);

   this.state = {
      dataSource: ds.cloneWithRows(props.professors),
    }

    this.changeCourse = this.changeCourse.bind(this);
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
      this.props.fetchProfessors(this.props.course);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.professors)
    });
  }

  changeCourse(course) {
    this.props.fetchProfessors(course);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Picker
          selectedValue={this.props.course}
          onValueChange={this.changeCourse}
        >
          <Picker.Item label="Todos" value={communitiesId.ALL} />
          <Picker.Item label="Engenharia Aeroespacial" value={communitiesId.AEROESPACIAL} />
          <Picker.Item label="Engenharia Automotiva" value={communitiesId.AUTOMOTIVA} />
          <Picker.Item label="Engenharia de Energia" value={communitiesId.ENERGIA} />
          <Picker.Item label="Engenharia Eletrônica" value={communitiesId.ELETRONICA} />
          <Picker.Item label="Engenharia de Software" value={communitiesId.SOFTWARE} />
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
