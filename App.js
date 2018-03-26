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
  View
} from 'react-native';

import MapView from 'react-native-maps'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'I got it now. Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
