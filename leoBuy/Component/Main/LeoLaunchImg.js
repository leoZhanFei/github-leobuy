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
    Image
} from 'react-native';

var win = require('Dimensions').get('window');
var Main = require('../Main/LeoMain');

var LaunchImg = React.createClass({
    render() {
        return (
            <Image source={require('../drawable-xxhdpi/launchimage.png')}
                   style={{flex:1,width:win.width,height:win.height}}/>
        );
    },

    // 定时器\网络请求
    componentDidMount(){
        //定时:2s切换到Main
        setTimeout(()=>{
            //页面切换
            this.props.navigator.replace({
                component:Main,
            });
        },2000);
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

module.exports = LaunchImg;
