/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform //判断运行系统

} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Navigator from 'react-native-deprecated-custom-components';

var Home = require('../Home/LeoHome');
var Mine = require('../Mine/LeoMine');
var Shop = require('../Shop/LeoShop');
var More = require('../More/LeoMore');

var Main = React.createClass({
    // 初始化变量、状态机
    getInitialState(){
        return{
            selectedTab:'home' //默认第一个
        }
    },

    render() {
        return (
            <TabNavigator>
                {/*首页*/}
                <TabNavigator.Item
                    title='首页'
                    renderIcon={() => <Image
                        source={require('../../Component/drawable-xxhdpi/icon_tabbar_homepage.png')}
                        style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image
                        source={require('../../Component/drawable-xxhdpi/icon_tabbar_homepage_selected.png')}
                        style={styles.iconStyle}/>}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => {this.setState({ selectedTab: 'home' })}}
                >
                    <Navigator.Navigator
                        initialRoute={{name:'首页',component:Home}}
                        configureScene={()=>{
                            return Navigator.Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>
                        }}
                    />
                </TabNavigator.Item>
                {/*商家*/}
                <TabNavigator.Item
                    title='商家'
                    renderIcon={() => <Image
                        source={require('../../Component/drawable-xxhdpi/icon_tabbar_merchant_normal.png')}
                        style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image
                        source={require('../../Component/drawable-xxhdpi/icon_tabbar_merchant_selected.png')}
                        style={styles.iconStyle}/>}
                    selected={this.state.selectedTab === 'shop'}
                    onPress={() => {this.setState({ selectedTab: 'shop' })}}
                >
                    <Navigator.Navigator
                        initialRoute={{name:'商店',component:Shop}}
                        configureScene={()=>{
                            return Navigator.Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>
                        }}
                    />
                </TabNavigator.Item>
                {/*我的*/}
                <TabNavigator.Item
                    title='我的'
                    renderIcon={() => <Image
                        source={require('../../Component/drawable-xxhdpi/icon_tabbar_mine.png')}
                        style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image
                        source={require('../../Component/drawable-xxhdpi/icon_tabbar_mine_selected.png')}
                        style={styles.iconStyle}/>}
                    selected={this.state.selectedTab === 'mine'}
                    onPress={() => {this.setState({ selectedTab: 'mine' })}}
                >
                    <Navigator.Navigator
                        initialRoute={{name:'我的',component:Mine}}
                        configureScene={()=>{
                            return Navigator.Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>
                        }}
                    />
                </TabNavigator.Item>
                {/*更多*/}
                <TabNavigator.Item
                    title='更多'
                    renderIcon={() => <Image
                        source={require('../../Component/drawable-xxhdpi/icon_tabbar_misc.png')}
                        style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image
                        source={require('../../Component/drawable-xxhdpi/icon_tabbar_misc_selected.png')}
                        style={styles.iconStyle}/>}
                    selected={this.state.selectedTab === 'more'}
                    onPress={() => {this.setState({ selectedTab: 'more' })}}
                >
                    <Navigator.Navigator
                        initialRoute={{name:'更多',component:More}}
                        configureScene={()=>{
                            return Navigator.Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>
                        }}
                    />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
});

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios'?30:25,
        height: Platform.OS === 'ios'?30:25,
    },
});

module.exports = Main;
