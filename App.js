/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'I got it now. Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/********* Code for get current_user_location_GPS **************/
const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
/**************************************************************/

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialPosition :{
        latitude : 16.782520,
        longitude : 96.154203,
        latitudeDelta : 0.1,
        longitudeDelta : 0.1
      },
      markerPosition : {
        latitude : 0,
        longitude : 0
      }
    }
  }

  /********* Code for get current_user_location_GPS **************/
  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) =>{
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
      alert(JSON.stringify(position));
      var initialRegion = {
        latitude : lat,
        longitude : long,
        latitudeDelta : LATITUDE_DELTA,
        longitudeDelta : LONGITUDE_DELTA
      }
      this.setState({initialPosition:initialRegion})
      this.setState({markerPosition:initialRegion})
    })

    // this is the indicator moving while moving
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      this.setState({initialPosition:region})
      this.setState({markerPosition:region})
    });
  }
  /**************************************************************/
  
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={this.state.initialPosition}>
          <MapView.Marker
           coordinate={this.state.markerPosition}
           title="Current User GPS"
          />
          
          
          <MapView.Marker
           coordinate={{
            latitude : 16.785067,
            longitude : 96.152014            
           }}
           title="ASO"
          />
          
          <MapView.Marker
           coordinate={{
            latitude : 16.782520,
            longitude : 96.154203,
           }}
           title="Hnin2"
          />

          <MapView.Marker
           coordinate={{
            latitude : 16.792585,
            longitude : 96.146993             
           }}
           title="Shweyin"
          />

          <MapView.Marker
           coordinate={{
            latitude : 16.790489,
            longitude : 96.139097                         
           }}
           title="HHA"
          />

          <MapView.Marker
           coordinate={{
            latitude : 16.800102, 
            longitude : 96.142273                        
           }}
           title="MayThu"
          />
        </MapView>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  }
});
