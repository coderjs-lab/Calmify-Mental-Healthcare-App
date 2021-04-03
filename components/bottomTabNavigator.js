//Importing components from libraries
import React, { Component }  from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import HelpScreen from '../screens/HelpScreen';


//Displaying the bootom tab navigator
export const bottomTabNavigator = createMaterialBottomTabNavigator({

    HomeScreen : {
        screen: HomeScreen,
        navigationOptions :{
        tabBarIcon : ({ tintColor, focused }) => <Icon name="home" type="font-awesome-5" size={23} color={tintColor} focused={true}/>,
        tabBarLabel : <Text style={{ fontSize: 12, textAlignVertical:"bottom", textAlign: 'center'}}>Home</Text>
        }
    },
    HelpScreen : {
        screen: HelpScreen,
        navigationOptions :{
        tabBarIcon : ({ tintColor, focused }) => <Icon name="hand-holding-heart" type="font-awesome-5" size={24} color={tintColor} focused={true}/>,
        tabBarLabel : <Text style={{ fontSize: 12, textAlignVertical:"bottom", textAlign: 'center'}}>Self-Help</Text>
        }
    }
},
{
    initialRouteName: 'HomeScreen',
    activeColor: '#2DA3FF',
    inactiveColor: '#799197',
    barStyle: { backgroundColor: 'white', borderTopWidth: 2.5 , borderTopColor: '#55adf1'},
}
);