import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  WebView,
  Image,
  ScrollView,
  ListView,
  Linking
} from 'react-native';

import OpenEmail from './open-email';
import Icon from 'react-native-vector-icons/FontAwesome';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: ds.cloneWithRows([
        { title: 'Telefone',
          text:
            [{
              'placeholder': 'Telefone',
              'content': '+55 (61) 3107-8901',
              'id': '1',
              'color': 'green'
            }],
          icon: 'phone'
        },
        { title: 'Emails',
          text:
            [{
              'placeholder': 'Secretaria',
              'content': 'unbgama@unb.br',
              'id': '1'
            },
            {
              'placeholder': 'Direção',
              'content': 'direcaofga@unb.br',
              'id': '2'
            },
            {
              'placeholder': 'Equipe do Portal/Site',
              'content': 'webmaster.fga@gmail.com',
              'id': '3'
            }],
          icon: 'envelope'
        },
        { title: 'Endereço',
          text:
            [{
              'placeholder': 'Universidade de Brasília',
              'content': 'Faculdade Gama',
              'id': '1'
            },
            {
              'placeholder': 'Endereço',
              'content': 'Área Especial de Indústria Projeção A Brasília',
              'id': '2'
            },
            {
              'placeholder': 'CEP',
              'content': '72.444-240',
              'id': '3'
            },
            {
              'placeholder': 'Bairro',
              'content': 'Gama - Setor Leste',
              'id': '4'
            }],
          icon: 'map-marker'
        }
      ])
    };
  }

  handleEmail(email) {
    Linking.openURL('mailto:' + email);
  }

  handlePhone(phone) {
    Linking.openURL('tel:' + phone);
  }

  listEntity(rowData) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.iconContainer}>
          <Text style={styles.contactTitle}>
            {rowData.title}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <For each="item" of={rowData.text}>

            <Choose>
              <When condition={rowData.title == "Emails"}>
                <Text key={item.id} onPress={() => this.handleEmail(item.content)} style={styles.contactContent}>{item.content}</Text>
              </When>

              <When condition={rowData.title == "Telefone"}>
                <Text key={item.id} onPress={() => this.handlePhone(item.content)} style={styles.contactContent}>{item.content}</Text>
              </When>

              <Otherwise>
                <Text key={item.id} style={styles.contactContent}>{item.content}</Text>
              </Otherwise>
            </Choose>

          </For>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Contato</Text>
        </View>
        <View style={styles.contactList}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.listEntity(rowData) }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdcdcd'
  },
  header: {
    flex: 1,
    backgroundColor: '#146d43',
    paddingLeft: 10,
    justifyContent: 'center'
  },
  component: {
    flex: 1
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28
  },
  contactList: {
    flex: 8,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  wrapper: {
    marginBottom: 10,
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  contactTitle: {
    color: '#005263',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  contactContent: {
    color: '#444',
    fontSize: 16,
    paddingBottom: 8
  }
})

