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


var Main = require('./Component/Main/LeoMain');

export default class leoBuy extends Component {
    render() {
        return (
            <Main/>
        );
    }
}

AppRegistry.registerComponent('leoBuy', () => leoBuy);
