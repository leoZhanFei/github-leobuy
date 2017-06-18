/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Navigator from 'react-native-deprecated-custom-components';

var LaunchImg = require('./Component/Main/LeoLaunchImg');
var Main = require('./Component/Main/LeoMain');

export default class leoBuy extends Component {
    render() {
        return (
            <Navigator.Navigator
                initialRoute={{name:'启动',component:LaunchImg}}
                configureScene={()=>{
                    return Navigator.Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>
                }}
            />
        );
    }
}

AppRegistry.registerComponent('leoBuy', () => leoBuy);
