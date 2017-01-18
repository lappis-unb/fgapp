import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  ListView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const baseUrl = 'https://fga.unb.br/';
const defaultImageUrl = 'https://www.gravatar.com/avatar/9bfa8642e33237dc3f22bec811d87d1d?only_path=false&size=150&d=mm';

export default class FgaProfessors extends Component {
  constructor(props) {
    super(props);

   this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  buildRowData(rowData) {
    return <ProfessorsListItem
              name={rowData.name} image={rowData.image} additional_data={rowData.additional_data} />
  }

  componentDidMount() {
    let apiUrl = "https://fga.unb.br/";
    let apiNamespace = "api/v1/profiles/";
    fetch(apiUrl + apiNamespace + '/35/members')
      .then((response) => response.json())
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
        />
      </View>
    );
  }
}

class ProfessorsListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
    }
  }

  goToProfessor() {
    Actions.Professor({
      name: this.props.name,
      email: this.props.additional_data.email,
      description: this.props.additional_data.description,
      imageUrl: this.props.image === null ? defaultImageUrl : baseUrl + this.props.image.url
    });
  }

  render() {
    var imageUrl = this.props.image === null ? defaultImageUrl : baseUrl + this.props.image.url;
    console.log(imageUrl);
    return (
      <TouchableOpacity onPress={() => this.goToProfessor()}>
        <View style={styles.professorBlock}>
            <Image style={styles.photo} source={{uri: imageUrl}} />
          <View style={{flex: 1}}>
          <Text style={styles.professorName}>{this.state.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  professorBlock: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    alignItems: "center",
    marginLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc"
  },

  photo: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  professorName: {
    color: "#000",
    marginLeft: 10,
  }
})
