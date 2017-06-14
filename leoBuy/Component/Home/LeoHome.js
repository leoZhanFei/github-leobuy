/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavigatorBar()}
                <Text style={styles.welcome}>
                    首页
                </Text>
            </View>
        );
    },

    // 首页导航条
    renderNavigatorBar(){
        return (
            <View>
                {/*左边*/}
                <Text>上海</Text>
                {/*中间*/}
                <TextInput
                    placeholder='输入商家、品类、商圈'
                />
                {/*右边*/}
            </View>
        )
    },

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = Home;
