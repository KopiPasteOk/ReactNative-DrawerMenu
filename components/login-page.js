import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SplashScreen extends Component {
 
  render() {    
    return (
      <View style={
        {flex: 1, justifyContent:'center',  alignItems:'center'}}>
          <Text>''' LOGIN PAGE '''</Text>

          <TouchableOpacity 
            onPress={()=>{this.props.navigation.replace('BasePage')}} 
            style ={{
                height: 40,
                width:160,
                borderRadius:10,
                backgroundColor : "blue",
                marginTop: 20
            }}>
            <Button 
              color="white"
              title="L o g i n" />
          </TouchableOpacity>
      </View>
    )
  }
}

export default SplashScreen;
