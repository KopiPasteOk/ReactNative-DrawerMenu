## REACT NATIVE CLI DRAWER MENU

![](https://github.com/programmer-indonesia/RN_CLI_drawer_menu/blob/master/screenshoot.png =100x217)


##### Information
- This project build use React Native CLI 
- This project can compile to Android and IOS
- React native version: 
react-native-cli: 2.0.1  
react-native: 0.61.5  

##### How To Install
```
npm install
```

##### IOS 
```
cd ios
pod install
```

##### Run On IOS Simulator
```
react-native run-ios --simulator "simulator name"
```


##### Run On IOS Device
- Open project egov_rn_cli.xcworkspace on Xcode
- Settings signing & Capabilities 
- Click run button
- If the process successful,  next we can run  on device by command:
```
react-native run-ios --device "iPad Name"
```

##### Run On Android
```
react-native run-android
```

##### Another topic:
react-native-drawer-menu has bug:
When app open in potrait then rotate to landscape, some left screen not touchable.
To fix that, change const width in node_modules/react-native-drawer-menu/index.js

```
const width=(Dimensions.get('window').width > Dimensions.get('window').height) ? Dimensions.get('window').width : Dimensions.get('window').height;
```
