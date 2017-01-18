import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class DrawerMenu extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: ds.cloneWithRows([
        {text: 'Professores', icon: 'newspaper-o', transitionTo: Actions.FgaNews},
        {text: 'Tcc', icon: 'envira', transitionTo: Actions.Events},
        {text: 'Sobre', icon: 'eraser', transitionTo: Actions.FgaNews}
      ])
    };
  }

  listEntity(rowData) {
    return (
      <TouchableOpacity onPress={() => { rowData.transitionTo({type: 'replace'}) }}>
        <View style={styles.wrapper}>
          <View style={styles.iconContainer}>
            <Icon style={styles.iconStyle} name={rowData.icon}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              {rowData.text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.listEntity(rowData) }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  wrapper: {
    flexDirection: 'row',
    padding: 5
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  textContainer: {
    flex: 8,
    justifyContent: 'center'
  },
  iconStyle: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 21
  },
  textStyle: {
    fontSize: 21
  }
});
