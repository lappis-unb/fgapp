import React, {Component} from 'react';
import {Text, View, Linking, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Links extends Component {
    static propTypes = {
        url: React.PropTypes.string
    };

    clickButton = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('Don\'t know how to open URI: ' + url);
            }
        });
    };

    render() {
        return (
          <View style={{backgroundColor:"#cdcdcd",  flex: 1}} >
            <View style={styles.button}>
              <Icon.Button name="home" color="#146d43" backgroundColor="#fff" onPress={() => {this.clickButton('http://unb.br')}}>
                 Portal da UnB
              </Icon.Button>
            </View>
            <View style={styles.button}>
              <Icon.Button name="graduation-cap" color="#146d43" backgroundColor="#fff" onPress={() => {this.clickButton('https://matriculaweb.unb.br/')}}>
                 Matrícula Web
              </Icon.Button>
            </View>
            <View style={styles.button}>
              <Icon.Button name="handshake-o" color="#146d43" backgroundColor="#fff" onPress={() => {this.clickButton('https://www.saeweb.unb.br/')}}>
                 SaeWeb
              </Icon.Button>
            </View>
            <View style={styles.button}>
              <Icon.Button name="book" color="#146d43" backgroundColor="#fff" onPress={() => {this.clickButton('http://aprender.unb.br/')}}>
                 Moodle UnB
              </Icon.Button>
            </View>
            <View style={styles.button}>
              <Icon.Button name="book" color="#146d43" backgroundColor="#fff" onPress={() => {this.clickButton('http://gama.ead.unb.br/')}}>
                 Moodle FGA
              </Icon.Button>
            </View>
            <View style={styles.button}>
              <Icon.Button name="file-text-o" color="#146d43" backgroundColor="#fff" onPress={() => {this.clickButton('https://unbdoc.unb.br/')}}>
                 UnB Doc
              </Icon.Button>
            </View>
            <View style={styles.button}>
              <Icon.Button name="cutlery" color="#146d43" backgroundColor="#fff" onPress={() => {this.clickButton('http://www.ru.unb.br/cardapio-ru-unb')}}>
                 Cardápio RU
              </Icon.Button>
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
    }
});
