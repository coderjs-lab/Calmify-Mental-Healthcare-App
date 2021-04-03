import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, Modal, FlatList, Dimensions} from 'react-native';
import {Button, Card, Icon, ListItem, Tile} from 'react-native-elements';
import { WebView } from 'react-native-webview';
import AppHeader from '../components/AppHeader.js';
import * as adata from '../affirmations.json';
import Constants from 'expo-constants';

export default class HelpScreen extends React.Component {

    //Defining states in constructor
    constructor() {
        super();
        this.state = {
            button1: "Calm Down!\nJust Relax now for a minute",
            button2: "Ground Yourself!\nFollow these tips to ground  \nyourself",
            button3: "Breathe In and Out!\nSimple breathing exercise to\nmake yourself calm",
            button4: "Get a Deep Sleep\nFollow the tips to get a good\nnight sleep",
            button5: "Affirmations for You\nAffirmations to overcome     \ndemotivation",
            affirmation: '',
            modal1: false,
            modal2: false,
            modal3: false,
            modal4: false,
            modal5: false
        };
    }

    componentDidMount() {
        this.getAffirmation()
    }
    getAffirmation() {
        let data = adata.affirmations
        let affirmationNum = Math.floor(Math.random() * data.length)
        let randomAffirmation = data[affirmationNum]
  
        this.setState({
            affirmation: randomAffirmation['affirmation'],
        })
    }
    getNewAffirmation = () => {
        this.getAffirmation()
    }

    showButton1=()=>{
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal1}
        >
            <View>
            
            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#9ade7d'}}>
            <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal1: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 100, marginTop: 16, color: '#fff'}}>Calm Down!</Text>
            </View>

            <ImageBackground source={require('../assets/calmify-bg.png')} style={styles.image}>

                <ScrollView contentContainerStyle={{height: 1300}}>

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold' }}>Take a Breath</Text>
                        <Text style={{color: '#3F91FF', fontSize: 20, textAlign: "center", marginTop: 27}}>Focusing on your breathing slows down the adrenaline response and the distressing thoughts. Breathe mindfully and notice the sensations of breathing into your belly. You might find it helpful to count your breaths, or to breath in to a count of 4, and out to a count of 4.</Text>                  
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 27
                        }}
                    />

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold' }}>Observe</Text>
                        <Text style={{color: '#3F91FF', fontSize: 20, textAlign: "center", marginTop: 27}}>Your thoughts and feelings. For example: • I'm anxious • My body's alarm system has been triggered • My mind is tricking me into believing I'm in danger • I'm feeling really tense and hyped up</Text>                  
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 27
                        }}
                    />

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold' }}>Pull Back</Text>
                        <Text style={{color: '#3F91FF', fontSize: 20, textAlign: "center", marginTop: 27}}>Ask yourself: • Is this really true or does it just feel that way? • Is this fact or opinion? • What would a friend say about this? • What advice would I tell someone else? • Even though it feels really bad, these physical sensations are a normal body response... it will pass </Text>                  
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 27
                        }}
                    />

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold' }}>Your Turn</Text>
                        <Text style={{color: '#3F91FF', fontSize: 20, textAlign: "center", marginTop: 27}}>Now it's over to you. Don't worry though, this part's easy. Try something that works for you. Maybe do some grounding techniques, read through some positive quotes or affirmations, do some deep breathing, check out the catastrophe scale, or remind yourself that you're in the present. There's no right or wrong thing to try, whatever works for you is best</Text>                  
                    </View>
                    
                </ScrollView>

            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    showButton2=()=>{
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal2}
        >
            <View>
            
            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#5EB2F4'}}>
            <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal2: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 80, marginTop: 16, color: '#fff'}}>Ground Yourself</Text>
            </View>

            <ImageBackground source={require('../assets/calmify-bg.png')} style={styles.image}>

                <ScrollView contentContainerStyle={{height: 1980}}>


                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold' }}>Try the 5-4-3-2-1 method</Text>
                        <Text style={{color: '#3F91FF', fontSize: 20, textAlign: "center", marginTop: 27}}>Working backward from 5, use your senses to list things you notice around you.</Text>                  
                        <Image source={require('../assets/54321.png')} style={{width:300, height: 300, alignSelf: 'center', marginTop:20}}/>
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 32
                        }}
                    />

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold' }}>Put your hands in water</Text>
                        <Text style={{color: '#3F91FF', fontSize: 20, textAlign: "center", marginTop: 27}}>Focus on the water’s temperature and how it feels on your fingertips, palms, and the backs of your hands. Does it feel the same in each part of your hand?{'\n'}Use warm water first, then cold. Next, try cold water first, then warm. Does it feel different to switch from cold to warm water versus warm to cold?</Text>                  
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 32
                        }}
                    />

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold' }}>Pick up or touch items near you</Text>
                        <Text style={{color: '#3F91FF', fontSize: 20, textAlign: "center", marginTop: 27}}>Are the things you touch soft or hard? Heavy or light? Warm or cool? Focus on the texture and color of each item. Challenge yourself to think of specific colors, such as crimson, burgundy, indigo, or turquoise, instead of simply red or blue.</Text>                  
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 32
                        }}
                    />

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold' }}>Move your body</Text>
                        <Text style={{color: '#3F91FF', fontSize: 20, textAlign: "center", marginTop: 27}}>Do a few exercises or stretches. You could try jumping jacks, jumping up and down, jumping rope, jogging in place, or stretching different muscle groups one by one.{'\n'}Pay attention to how your body feels with each movement and when your hands or feet touch the floor or move through the air. How does the floor feel against your feet and hands? If you jump rope, listen to the sound of the rope in the air and when it hits the ground.</Text>                  
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 32
                        }}
                    />

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold' }}>Savor a scent</Text>
                        <Text style={{color: '#3F91FF', fontSize: 20, textAlign: "center", marginTop: 27}}>Is there a fragrance that appeals to you? This might be a cup of tea, an herb or spice, a favorite soap, or a scented candle. Inhale the fragrance slowly and deeply and try to note its qualities (sweet, spicy, sharp, citrusy, and so on).</Text>                  
                    </View>
                    
                </ScrollView>

            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    showButton3=()=>{
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal3}
        >
            <View>
            
            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#9ade7d'}}>
            <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal3: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 67, marginTop: 16, color: '#fff'}}>Breath In and Out</Text>
            </View>

            <ImageBackground source={require('../assets/calmify-bg.png')} style={styles.image}>

                <ScrollView contentContainerStyle={{height: 1520}}>

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold', marginBottom: 20 }}>Belly Breathing</Text>
                        <Image source={require('../assets/belly-breathing.png')} style={{width:350, height: 350, alignSelf: 'center'}} />                  
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 35,
                            marginBottom: 10
                        }}
                    />

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold', marginBottom: 20 }}>4-7-8 Breathing</Text>
                        <Image source={require('../assets/478-Breathing.png')} style={{width:350, height: 350, alignSelf: 'center'}} />                  
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 35,
                            marginBottom: 10
                        }}
                    />

                    <View>
                        <Text style={{color: '#58d45a', fontSize: 30, textAlign: "center", marginTop: 17, fontWeight: 'bold', marginBottom: 20 }}>Roll Breathing</Text>
                        <Image source={require('../assets/roll-breathing.png')} style={{width:350, height: 350, alignSelf: 'center'}} />                  
                    </View>
                    
                </ScrollView>

            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    showButton4=()=>{
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal4}
        >
            <View>
            
            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#5EB2F4'}}>
            <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal4: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 70, marginTop: 16, color: '#fff'}}>Get a Deep Sleep</Text>
            </View>

            <ImageBackground source={require('../assets/calmify-bg.png')} style={styles.image}>

                <ScrollView contentContainerStyle={{height: 2480}}>

                    <View>
                        <Text style={{color: '#ffffff', borderRadius: 20, marginTop: 20, fontSize: 23, textAlign: "center", fontWeight: 'bold', marginLeft: 5, marginRight: 5, backgroundColor: '#9ade7d', marginBottom:30}}>Follow these tips on a regular basis to have a sound sleep:</Text>                
                    </View>

                    <Text style={{marginLeft: 15, marginRight:5, fontSize: 20, color: '#1175fa', textAlign: 'left', marginBottom: 15}}>• Go to bed and wake up at the same time every day, even on weekends</Text> 
                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    />

                    <Text style={{marginLeft: 15, marginRight:5, fontSize: 20, color: '#1175fa', textAlign: 'left', marginBottom: 15}}>• Be Mindful. Shortly before bedtime, try a relaxation strategy that incorporates mindfulness, deep breathing, or meditation, all of which boost sleep time and quality</Text>   
                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    />

                    <Text style={{marginLeft: 15, marginRight:5, fontSize: 20, color: '#1175fa', textAlign: 'left', marginBottom: 15}}>• Turn Screens Off Early. The blue light emitted by digital devices—including TVs, phones, laptops, and tablets—can throw off your body’s internal clock, so avoid them before bedtime. Finding a tech-free way to wind down can help soothe stress</Text>   
                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    />
                    
                    <Text style={{marginLeft: 15, marginRight:5, fontSize: 20, color: '#1175fa', textAlign: 'left', marginBottom: 15}}>• Take a Hot Bath or Shower to Relax. Going from warm water into a cooler bedroom will cause your body temperature to drop, naturally making you feel sleepy</Text>   
                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    />
                    
                    <Text style={{marginLeft: 15, marginRight:5, fontSize: 20, color: '#1175fa', textAlign: 'left', marginBottom: 15}}>• Count Sheep. It might sound a little silly, but it works. The reason being when you keep your brain focused on one thing helps you power down. You can also try focusing on your breathing, consciously taking deep breaths in and out, until you feel calmer</Text>   
                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    />
                    
                    <Text style={{marginLeft: 15, marginRight:5, fontSize: 20, color: '#1175fa', textAlign: 'left', marginBottom: 15}}>• Avoid caffeine, alcohol, large meals, foods that induce heartburn, and drinking a lot of fluid for several hours before bedtime</Text>   
                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    />
                    
                    <Text style={{marginLeft: 15, marginRight:5, fontSize: 20, color: '#1175fa', textAlign: 'left', marginBottom: 15}}>• Exercise Regularly. Exercise is a great stress reliever and has been shown to improve the quality of sleep, particularly for people with insomnia. But make sure your more intense workouts aren’t too close to bedtime. Try to get your workouts in at least three hours before you turn in</Text>   
                    <View
                        style={{
                            borderBottomColor: '#3F91FF',
                            borderBottomWidth: 2,
                            width: 400,
                            alignSelf: "center",
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    />

                    <Image source={require('../assets/music.png')} style={{width:100, height: 100, alignSelf: 'center', marginTop: 15, marginBottom:15}} />
                    <Text style={{fontSize: 20, color: 'white', backgroundColor: '#5EB2F4', borderRadius: 10, height:30, width: 300, textAlign: 'center', alignSelf: 'center', marginBottom:25}}>Listen to Some Relaxing Music</Text>
                    
                    <WebView 
                        source={{
                            uri: 'http://www.youtube.com/watch?v=xINL9068Yvg&feature=related'
                        }}
                        style={{
                            marginLeft: 10,
                            marginRight: 10,
                            height: 250,
                            marginBottom: 25,
                            flex:0,
                            borderWidth: 2,
                            borderColor: '#5EB2F4'  
                        }}
                        containerStyle={{
                            marginLeft: 10,
                            marginRight: 10,
                            height: 250,
                            marginBottom: 25,
                            flex:0,
                            borderColor: '#5EB2F4'   
                        }}                       
                    />
                    <WebView 
                        source={{
                            uri: 'http://www.youtube.com/watch?v=MQYweHL9chg'
                        }}
                        style={{
                            marginLeft: 10,
                            marginRight: 10,
                            height: 250,
                            marginBottom: 25,
                            flex:0,
                            borderColor: '#5EB2F4'   
                        }}
                        containerStyle={{
                            marginLeft: 10,
                            marginRight: 10,
                            height: 250,
                            marginBottom: 25,
                            flex:0,
                            borderColor: '#5EB2F4'   
                        }}     
                    />
                    <WebView 
                        source={{
                            uri: 'http://www.youtube.com/watch?v=sGUTu2IEUiQ'
                        }}
                        style={{
                            marginLeft: 10,
                            marginRight: 10,
                            height: 250,
                            marginBottom: 25,
                            flex:0,
                            borderColor: '#5EB2F4'   
                        }}
                        containerStyle={{
                            marginLeft: 10,
                            marginRight: 10,
                            height: 250,
                            marginBottom: 25,
                            flex:0,
                            borderColor: '#5EB2F4'   
                        }}     
                    />


                </ScrollView>

            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    showButton5=()=>{
        const { affirmation } = this.state
        return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal5}
        >
            <View>
            
            <View style={{flexDirection: 'row',  borderBottomWidth: 1, borderBottomColor: '#D2D2D2', paddingBottom: 20, backgroundColor: '#9ade7d'}}>
            <Icon name="arrow-left" type="font-awesome" size={25} onPress={()=>{this.setState({modal5: false})}} color="#fff" iconStyle={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 5}}/>
            <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 23, marginLeft: 55, marginTop: 16, color: '#fff'}}>Affirmations for You</Text>
            </View>

            <ImageBackground source={require('../assets/calmify-bg.png')} style={styles.image}>

                <View>
                    <Tile
                        imageSrc={require('../assets/affirmation-textbox.png')}
                        imageContainerStyle={{width: 350, height: 350, alignSelf:'center', marginLeft: 5, marginTop: 150}}
                        containerStyle={{alignSelf: 'center'}}
                        contentContainerStyle={{alignContent: 'center'}}
                        title={affirmation}
                        titleStyle={{fontSize: 20, textAlign: 'center', color: '#ffffff', fontFamily: 'sans-serif-medium', marginLeft: 7, marginRight: 7}}
                        featured
                        style={{alignSelf: 'center'}}
                    />
                </View>

            </ImageBackground>
        
            </View>
        </Modal>
        )
    }

    render() {

        
        
        return(

            <View>
                
            <AppHeader navigation ={this.props.navigation}/>

            {this.showButton1()}
            {this.showButton2()}
            {this.showButton3()}
            {this.showButton4()}
            {this.showButton5()}

            <ImageBackground source={require('../assets/calmify-bg.png')} style={styles.image}>

            <ScrollView contentContainerStyle={{height: 920}}>

                <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 5}} source={require('../assets/self-help.png')} />
                <Text style={{fontSize: 20, color: 'white', backgroundColor: '#8ADD67', borderRadius: 10, width:97, height:30, textAlign: 'center', alignSelf: 'center'}}>Self Help</Text>
                <Text style={{fontSize: 17, color: '#1175fa', textAlign: 'center', alignSelf: 'center', marginTop: 13, marginLeft: 15, marginRight: 15}}>Don't worry. Stay Calm.{'\n'}Everything is going to be fine here 😌</Text>

                <View
                    style={{
                        borderBottomColor: '#3F91FF',
                        borderBottomWidth: 2,
                        width: 380,
                        alignSelf: "center",
                        marginTop: 23,
                        marginBottom: 15
                    }}
                />

                <Button
                    raised
                    buttonStyle={{borderRadius: 10, width:340, height:80, backgroundColor: '#9ade7d', alignSelf: 'center'}}
                    containerStyle={{borderRadius: 10, width:340, height:80, alignSelf: 'center', marginTop: 10, marginBottom: 8}}
                    icon={
                        <Image source={require('../assets/calm.png')} style={styles.buttonImage}/>
                    }
                    iconLeft
                    title={this.state.button1}
                    titleStyle={styles.buttonText}
                    onPress={()=>{this.setState({modal1: true})}}
                />

                <Button
                    raised
                    buttonStyle={{borderRadius: 10, width:340, height:80, backgroundColor: '#5EB2F4', alignSelf: 'center'}}
                    containerStyle={{borderRadius: 10, width:340, height:80, alignSelf: 'center', marginTop: 10, marginBottom: 8}}
                    icon={
                        <Image source={require('../assets/grounded.png')} style={styles.buttonImage}/>
                    }
                    iconLeft
                    title={this.state.button2}
                    titleStyle={styles.buttonText}
                    onPress={()=>{this.setState({modal2: true})}}
                />

                <Button
                    raised
                    buttonStyle={{borderRadius: 10, width:340, height:80, backgroundColor: '#9ade7d', alignSelf: 'center'}}
                    containerStyle={{borderRadius: 10, width:340, height:80, alignSelf: 'center', marginTop: 10, marginBottom: 8}}
                    icon={
                        <Image source={require('../assets/breathe.png')} style={styles.buttonImage}/>
                    }
                    iconLeft
                    title={this.state.button3}
                    titleStyle={styles.buttonText}
                    onPress={()=>{this.setState({modal3: true})}}
                />

                <Button
                    raised
                    buttonStyle={{borderRadius: 10, width:340, height:80, backgroundColor: '#5EB2F4', alignSelf: 'center'}}
                    containerStyle={{borderRadius: 10, width:340, height:80, alignSelf: 'center', marginTop: 10, marginBottom: 8}}
                    icon={
                        <Image source={require('../assets/sleep.png')} style={styles.buttonImage}/>
                    }
                    iconLeft
                    title={this.state.button4}
                    titleStyle={styles.buttonText}
                    onPress={()=>{this.setState({modal4: true})}}
                />

                <Button
                    raised
                    buttonStyle={{borderRadius: 10, width:340, height:80, backgroundColor: '#9ade7d', alignSelf: 'center'}}
                    containerStyle={{borderRadius: 10, width:340, height:80, alignSelf: 'center', marginTop: 10, marginBottom: 8}}
                    icon={
                        <Image source={require('../assets/affirmation.png')} style={styles.buttonImage}/>
                    }
                    iconLeft
                    title={this.state.button5}
                    titleStyle={styles.buttonText}
                    onPress={()=>{this.setState({modal5: true})}}
                />

                </ScrollView>

            </ImageBackground>

            </View>

        );
    }
}

//Using Stylesheet to create different styles
const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        height: "100%"
    },
    buttonImage: {
        width: 50,
        height: 50
    },
    buttonText: {
        color: 'white', 
        fontSize: 16, 
        textAlign: 'left', 
        paddingLeft: 25
    }
});