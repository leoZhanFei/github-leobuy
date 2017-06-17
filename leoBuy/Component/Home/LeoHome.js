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
    TextInput,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var win = Dimensions.get('window');

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavigatorBar()}
            </View>
        );
    },

    // 首页导航条
    renderNavigatorBar(){
        return (
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={{marginTop:12,color:'white'}}>上海</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    placeholder='输入商家、品类、商圈'
                    style={styles.topInputStyle}
                />
                {/*右边*/}
                <View style={{marginTop:12}}>
                    <TouchableOpacity onPress={()=>{}}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:12}}>
                    <TouchableOpacity onPress={()=>{}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },
});

const styles = StyleSheet.create({
    navBarStyle: {
        height: Platform.OS === 'ios'?64:44,
        backgroundColor: 'rgba(225,96,0,1.0)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    topInputStyle: {
        width: win.width * 0.7,
        height: 35,
        backgroundColor: 'white',
        marginTop: 22,
        borderRadius: 16,
        paddingLeft: 10,
    },
    navRightImgStyle: {
        height: 30,
        width: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },

});

module.exports = Home;
