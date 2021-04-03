//Importing components from libraries
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, Modal, FlatList, Dimensions} from 'react-native';
import {Button, Card, Icon, ListItem, Header} from 'react-native-elements';
import AppHeader from '../components/AppHeader.js';
import call from 'react-native-phone-call';
import axios from 'axios';
import * as qdata from '../quotes.json';
import ChatBot from '../components/ChatBot.js'
import Constants from 'expo-constants';

export default class HomeScreen extends React.Component {

    //Defining states in constructor
    constructor() {
        super();
        this.state = {
            sosText: "Are you in crisis?\nClick on SOS for immediate help",
            helpNumbersVisible: false,
            quote: '',
            author: '',
            chat:false
        };
    }

    componentDidMount() {
        this.getQuote()
    }

    getQuote() {
        let data = qdata.quotes
        let quoteNum = Math.floor(Math.random() * data.length)
        let randomQuote = data[quoteNum]
  
        this.setState({
            quote: randomQuote['quote'],
            author: randomQuote['author']
        })
    }

    getNewQuote = () => {
        this.getQuote()
    }
  

    //Function to show the various emergency numbers
    showHelpNumbers=()=>{
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.helpNumbersVisible}
        >
            <View>
            
            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#55adf1'}}>
            <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({helpNumbersVisible: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 80, marginTop: 16, color: '#fff'}}>Immediate Help</Text>
            </View>

            <ImageBackground source={require('../assets/calmify-bg.png')} style={styles.image}>

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold' }}>Are you in Crisis?</Text>
                        <Text style={{color: '#3F91FF', fontSize: 20, textAlign: "center", marginTop: 17, fontWeight: "bold" }}>Do not feel alone. Get Help by calling the following helpline numbers.</Text>
                        <Text style={{color: '#3F91FF', fontSize: 20, textAlign: "center", marginTop: 17, fontWeight: "bold", marginBottom: 23}}>Things will get better.
                        {'\n'}
                        Stay Hopeful 🙂
                        </Text>                     
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 265,
                            alignSelf: "center"
                        }}
                    />

                    <Image style={styles.callImage} source={require('../assets/child.png')} />
                    <Button buttonStyle={styles.callButton} title="NCPCR Helpline for Children" titleStyle={styles.callButtonText} raised containerStyle={styles.callButton} onPress={()=>{call({number:'1800-121-2830'})}} />

                    <Image style={styles.callImage} source={require('../assets/adult.png')} />
                    <Button buttonStyle={styles.callButton, {backgroundColor: '#9ade7d'}} title="KIRAN Helpline for Everyone" titleStyle={styles.callButtonText} raised containerStyle={styles.callButton} onPress={()=>{call({number:'1800-599-0019'})}} />

            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    //Function to show the AI ChatBot
    showChatBot=()=>{
        return(
        <Modal
        visible={this.state.chat}>
        <View>
            <Header 
            backgroundColor="#5EB2F4"
            leftComponent={<Icon name="arrow-left" type="font-awesome" size={30} color="white" onPress={()=> this.setState({chat:false})}/>}
            centerComponent={<Text style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>Bob - The ChatBot</Text>}
            rightComponent={<Image source={require('../assets/minion-chatbot.png')} style={{height:40, width: 40}}/>}
            />
        </View>
        <ChatBot />
        </Modal>
        )
    }

    render() {

        const { quote, author } = this.state
        const windowWidth = Dimensions.get('window').width;

        return (
            
            <View>
                
                <AppHeader navigation ={this.props.navigation}/>

                {this.showHelpNumbers()}
                {this.showChatBot()}
                
                <ImageBackground source={require('../assets/calmify-bg.png')} style={styles.image}>

                        <View>
                            <Card containerStyle={styles.sosCard}>
                                <Text style={styles.sosText}>{this.state.sosText}</Text>                       
                                <Button
                                    raised
                                    buttonStyle={{borderRadius: 20, width:75, height:27, backgroundColor: 'white'}}
                                    containerStyle={{borderRadius: 20, width:75, height:37, alignSelf: 'center'}}
                                    title='SOS'
                                    titleStyle={{color: '#3F91FF', fontSize: 24, marginTop: 5}}
                                    onPress={()=>{this.setState({helpNumbersVisible: true})}}
                                />                              
                            </Card>
                        </View> 

                        <View
                            style={{
                                borderBottomColor: '#3F91FF',
                                borderBottomWidth: 2,
                                width: 380,
                                alignSelf: "center",
                                marginTop: 23
                            }}
                        />
        
                        <View style={{backgroundColor: 'white',height:290, paddingTop: 1, borderBottomColor: '#3F91FF', borderBottomWidth: 2, alignSelf: "center",width: windowWidth}}>
                            <Image source={require('../assets/quotes.png')} style={{width:240, height: 60, alignSelf: 'center', marginBottom: -20}} />

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 20, textAlign: 'center', color: '#439DE4', fontFamily: 'sans-serif-medium', marginLeft: 7, marginRight: 7}}>❝{quote}❞</Text>
                                <Text style={{fontSize: 17, textAlign: 'center', color: '#0bc40d', fontStyle: 'italic', fontFamily: 'Roboto', marginLeft: 7, marginRight: 7}}>— {author}  </Text>
                            </View>
                        </View>

                        <View style={{flexDirection: "row", marginTop: 21, width: windowWidth-70, alignSelf: 'center', alignItems: 'center', alignContent: 'center'}}>
                            <Image source={require('../assets/minion-chatbot.png')} style={{width:90, height: 90, marginLeft: 10}} />

                            <View style={{flexDirection: 'column'}}>

                                <Text style={{marginLeft: 60, fontSize: 17, color: '#45AAF8', fontWeight: 'bold'}}>Hey buddy! 👋{'\n'}My name is Bob </Text>

                                <Button
                                    raised
                                    buttonStyle={{borderRadius: 7, width:90, height:30, backgroundColor: '#8ADD67'}}
                                    containerStyle={{borderRadius: 7, width:90, height:30, alignSelf: 'center', marginTop: 10, marginLeft: 20 }}
                                    title='Talk Now'
                                    titleStyle={{color: 'white', fontSize: 16}}
                                    onPress={()=>{this.setState({chat:true})}}
                                /> 

                            </View>

                        </View>
                        
                </ImageBackground>
                
            </View>
        
        )
    }
}

//Using Stylesheet to create different styles
const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        height: "100%"
    },
    sosText: {
        color:'white',
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 10,
        width: 300,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
    sosCard: {
        height: 120,
        backgroundColor: '#5EB2F4',
        paddingTop: 8,
        borderRadius: 30,
        marginTop: 20,
    },
    callButton: {
        width: 250,
        backgroundColor: '#55adf1',
        alignSelf: 'center',
    },
    callButtonText: {
        color: '#fff',
        fontSize: 18
    },
    callImage: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: 25, 
        marginBottom: 15
    },
    selfHelp: {
        fontSize: 18,
        marginLeft: 17,
        color: '#1175fa'
    }
});