import React, {Component} from 'react';
import AnimatedSplash from "react-native-animated-splash-screen";
import { createAppContainer } from 'react-navigation';
import * as Font from 'expo-font';
import HomeScreen from './screens/HomeScreen.js';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default class App extends Component {

  //Displaying various components in render
  render() {
    return(
      <AppContainer/> 
    );
  }
}


//Creating app container which contains all screens
const AppContainer =  createAppContainer(AppDrawerNavigator);