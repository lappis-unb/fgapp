import React, { Component } from 'react';
import {
  View,
  ListView,
  StyleSheet,
  Picker,
  Text,
  Button,
  ActivityIndicator
} from 'react-native';

import FgaProfessorsContainer from '../containers/fga-professors-container';
import ProfessorsListItem from './professors-list-item';
import ProfessorsService from '../services/professors-service';
import communitiesId from '../config/professor-communities';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id != r2.id});

class FgaProfessors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows([]),
      loading: true
    }

    this.changeCourse = this.changeCourse.bind(this);
    this.fetchMoreProfessors = this.fetchMoreProfessors.bind(this);
  }

  componentDidMount() {
    if (this.props.professors.length !== 0) {
      // Delay ListView filling for better performance on lower devices
      setTimeout(() => {
        this.updateListView(this.props);
      }, 500);
    }

    this.verifyInitialFetchProfessors(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateListView(nextProps);
    this.verifyInitialFetchProfessors(nextProps);
  }

  updateListView(props) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(props.professors),
      loading: (props.professors.length === 0)
    });
  }

  verifyInitialFetchProfessors(props) {
    if (props.professors.length === 0) {
      this.props.fetchProfessors(props.course, props.page, props.lastPage);
    }
  }

  buildRowData(rowData) {
    return (
      <ProfessorsListItem
        key={rowData.id}
        name={rowData.name}
        image={rowData.image}
        additional_data={rowData.additional_data}
      />
    );
  }

  updatePageError() {
    this.props.professorsError(false);
    this.props.fetchProfessors(this.props.course, this.props.page, this.props.lastPage);
  }

  changeCourse(course) {
    // Clear ListView so that there is professores with the wrong avatar
    this.setState({
      dataSource: ds.cloneWithRows([])
    });
    this.props.changeCourse(course);
  }

  fetchMoreProfessors() {
    this.props.fetchProfessors(
      this.props.course,
      this.props.page + 1,
      this.props.lastPage
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
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
            <ActivityIndicator size={60} color="#21ba57" style={styles.activity} />
          </When>

          <When condition={ this.props.professors.length > 0 }>
              <Picker style={styles.filter}
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
              initialListSize={20}
              onEndReached={this.fetchMoreProfessors}
            />
          </When>
        </Choose>
      </View>
    );
  }
}

export default FgaProfessorsContainer (FgaProfessors);

const styles = StyleSheet.create({
  activity: {
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
  },
  filter: {
    backgroundColor: '#1ca95b',
    color: 'white'
  }
});
