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
                {this.renderTabNavigatorItem('首页','icon_tabbar_homepage',
                    'icon_tabbar_homepage_selected','home','首页',Home)}
                {/*商家*/}
                {this.renderTabNavigatorItem('商家','icon_tabbar_merchant_normal',
                    'icon_tabbar_merchant_selected','shop','商家',Shop)}
                {/*我的*/}
                {this.renderTabNavigatorItem('我的','icon_tabbar_mine',
                    'icon_tabbar_mine_selected','mine','我的',Mine,'5')}
                {/*更多*/}
                {this.renderTabNavigatorItem('更多','icon_tabbar_misc',
                    'icon_tabbar_misc_selected','more','更多',More)}
            </TabNavigator>
        );
    },

    // TabNavigator.Item 抽取封装
    renderTabNavigatorItem(titleName,icon,selectedIcon,selectedState,routeName,component,badgeText){
        return (
            <TabNavigator.Item
                title={titleName}
                renderIcon={() => <Image
                    source={{uri:icon}}
                    style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image
                    source={{uri:selectedIcon}}
                    style={styles.iconStyle}/>}
                selected={this.state.selectedTab === selectedState}
                onPress={() => {this.setState({ selectedTab: selectedState })}}
                selectedTitleStyle = {styles.selectedTitleStyle}
                badgeText={badgeText}
            >
                <Navigator.Navigator
                    initialRoute={{name:routeName,component:component}}
                    configureScene={()=>{
                        return Navigator.Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>
                    }}
                />
            </TabNavigator.Item>
        );
    },
});

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios'?30:25,
        height: Platform.OS === 'ios'?30:25,
    },
    selectedTitleStyle: {
        color: 'orange',
    },
});

module.exports = Main;
