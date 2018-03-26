https://github.com/react-community/react-native-maps
https://www.youtube.com/watch?v=6ZnfsJ6mM5c
https://www.youtube.com/watch?v=RjW1hMOA9M0

1. npm install --save react-native-maps
If module not found error occour, you see green text like 'npm install --save react-native-maps@0.16.4. The green text point out which version is suitable for your project.
So run accordinng to this green text.
npm install --save react-native-maps@0.16.4

2. react-native link react-native-maps
If it is error, run this 
react-native upgrade

3. make sure add these lines to add in AndroidManifest.xml
Make APP key in google
<uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

    Add this to your application, if you have no key register in this. https://developers.google.com/maps/documentation/android-api/signup
    <application>
    <meta-data 
      android:name="com.google.android.geo.API_KEY" 
      android:value="AIzaSyDKYmqHtsVuHh61juHXHUTQzQVSGhbdQoQ"
      />
    </application>

4. ----- Fix error in running on phone -----
(in project directory) mkdir android/app/src/main/assets
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
react-native run-android

5. 
This is the initial data setup under class

/********* Code for get current_user_location_GPS **************/
const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
/**************************************************************/

export default class App extends Component {


6. add this in class
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

7. Add this in view
<MapView style={styles.map} initialRegion={this.state.initialPosition}>
          <MapView.Marker
           coordinate={this.state.markerPosition}
           title="Current User GPS"
          />
        
        

The installation is
1. npm install
2. Go to android studio open andorid folder and build
3. Open your emulator in android studio and run
4. react-native run-android