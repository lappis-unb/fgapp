import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const baseUrl = 'https://fga.unb.br/';
const defaultImageUrl = 'https://www.gravatar.com/avatar/9bfa8642e33237dc3f22bec811d87d1d?only_path=false&size=150&d=mm';

export default class ProfessorsListItem extends Component {
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
      description: (this.props.additional_data.description === undefined || this.props.additional_data.description === "")?
      "Não há descrição ainda" : this.props.additional_data.description,
      imageUrl: this.props.image === null ? defaultImageUrl : baseUrl + this.props.image.url
    });
  }

  render() {
    var imageUrl = this.props.image === null ? defaultImageUrl : baseUrl + this.props.image.url;

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
    marginRight: 15,
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
