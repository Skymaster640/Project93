import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import ReactPlayer from 'react-player'
import axios from 'axios';

export default class CapKingdomMoons extends React.Component {

    constructor() {
    super();
    this.state = {
      apod: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Skymaster's Gamepedia</Text>
        </View>


        
        <ScrollView>
        <View style = {{marginRight:252,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('SMOWalkthrough')
          }}>
<Text>Return</Text>

</TouchableOpacity>
        </View>

        <View style = {styles.gameScreen}>

<Text style = {styles.gameTitleText}>Super Mario Odyssey</Text>

<Image
source = {require('../assets/SMOWalkthrough1.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Cap Kingdom is the first world you explore in Super Mario Odyssey. It is a land full of hat-themed buildings and a fog that flows at the bottom of the kingdom. On your first visit at the beginning of the game, all you have to do is follow the tutorial, defeat Topper at the top of Top-Hat Tower, then go to the Cascade Kingdom. This walkthrough will show you how to obtain every single Power Moon in the Cap Kingdom. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

</View>

</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#E11200',
  },
  titleContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: 40,
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'bold',
  },
  gameList: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 80,
    marginRight: 80,
    borderWidth: 10,
    borderColor: 'black',
  },
  gameScreen: {
    alignItems: 'center',
  },
  gameTitleText:{
    color:'white',
    fontFamily:'bold',
    fontSize:20
  },
  gameText:{
    color:'white',
  },
  gameDiscription:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },
  gameTrailer:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },
  trailer:{
    padding:10,
    
    backgroundColor:'white'
  },
  topicTitleText:{
    color:'white',
    fontFamily:'bold',
    fontSize:20,
    marginTop:20
  },
  walkthroughInstruction:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },
});
