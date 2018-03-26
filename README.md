https://www.youtube.com/watch?v=RjW1hMOA9M0
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

4. 



The installation is
1. npm install
2. Go to android studio open andorid folder and build
3. Open your emulator in android studio and run
4. react-native run-android