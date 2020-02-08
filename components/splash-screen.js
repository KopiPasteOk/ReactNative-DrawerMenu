import React, {Component} from 'react';
import {View, Text} from 'react-native';

class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(()=>{
      this.props.navigation.replace('LoginPage')
    }, 2000)
  }

  render() {    
    return (
      <View style={
        {flex: 1, justifyContent:'center', alignItems:'center'}}>
          <Text> ' ' '  SPLASH SCREEN  ' ' '</Text>
      </View>
    )
  }
}

export default SplashScreen;
