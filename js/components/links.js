import React, {Component} from 'react';
import {Text, View, Linking, TouchableOpacity, StyleSheet, ListView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Links extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: ds.cloneWithRows([
        { title: 'Links',
          text:
            [{
              'placeholder': 'Portal UnB',
              'url': 'http://unb.br',
              'id': '1',
              'icon':'home'
            },
            {
              'placeholder': 'MatrículaWeb',
              'url': 'https://matriculaweb.unb.br/',
              'id': '2',
              'icon':'graduation-cap'
            },
            {
              'placeholder': 'SaeWeb',
              'url': 'https://www.saeweb.unb.br/',
              'id': '3',
              'icon':'handshake-o'
            },
            {
              'placeholder': 'Moodle UnB',
              'url': 'http://aprender.unb.br/',
              'id': '4',
              'icon':'book'
            },
            {
              'placeholder': 'Moodle FGA',
              'url': 'http://gama.ead.unb.br/',
              'id': '5',
              'icon':'book'
            },
            {
              'placeholder': 'UnB Doc',
              'url': 'https://unbdoc.unb.br/',
              'id': '6',
              'icon': 'file-text-o'
            },
            {
              'placeholder': 'Cardápio RU',
              'url': 'http://www.ru.unb.br/cardapio-ru-unb',
              'id': '7',
              'icon': 'cutlery'
            },
          ],
        },
      ]),
    };
}
  handleUrl(url) {
    Linking.openURL(url);
  }

  listEntity(rowData){
    return(
      <View>
        <For each="item" of={rowData.text}>
          <View style={styles.button}>
            <Icon.Button key={item.id} name={item.icon} color="#146d43" backgroundColor="#fff" onPress={() => {this.handleUrl(item.url)}} >
            {item.placeholder}
            </Icon.Button>
          </View>
        </For>
      </View>

    );
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerTitle}>Links úteis</Text>
          </View>
          <View>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => this.listEntity(rowData)}
            />
          </View>
        </View>
      );
  }
}

var styles = StyleSheet.create({
    button: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    text: {
        color: 'white'
    },
    header: {
      paddingBottom: 10,
      paddingTop: 8,
      backgroundColor: '#146d43',
      paddingLeft: 10,
      justifyContent: 'center',
      marginBottom: 5
    },
    container: {
      flex: 1,
      backgroundColor: '#cdcdcd'
    },
    headerTitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 24
    },
});
