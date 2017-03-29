import React, {Component} from 'react';
import {Text, View, Linking, TouchableOpacity, StyleSheet} from 'react-native';

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
          <View>
            <TouchableOpacity onPress={() => {this.clickButton('https://facebook.com')}}>
                <View style={styles.button}>
                    <Text style={styles.text}> Facebook </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.clickButton('https://facebook.com')}}>
                <View style={styles.button}>
                    <Text style={styles.text}> Open </Text>
                </View>
            </TouchableOpacity>
          </View>

        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 30
    },
    button: {
        padding: 10,
        backgroundColor: '#3B5998',
        marginBottom: 10
    },
    text: {
        color: 'white'
    }
});
