//Importing components from libraries
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class AppHeader extends Component {

    //Displaying header component in render
    render(){
        return(
          
                <Header 
                    backgroundImage={require("../assets/calmify-headerbg.png")}
                    backgroundImageStyle={{resizeMode:'cover', height:87}}
                    containerStyle={{height:90}}
                    leftComponent={<Icon name="bars" type="font-awesome" size={30} color="white" onPress={() => this.props.navigation.toggleDrawer()} />}
                    leftContainerStyle={{paddingTop:12}}
                    placement="center"
                    backgroundColor = {'#55adf1'}
                    rightComponent={<Image
                        style={styles.tinyLogo}
                        source={require('../assets/logo-header.png')}
                    />}
                
                />
      
        );
    }
}

//Using Stylesheet to create different styles
const styles = StyleSheet.create({
    tinyLogo: {
      width: 45,
      height: 45,
      marginTop: 4
    }
});