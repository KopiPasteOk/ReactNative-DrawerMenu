import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ProfilePage extends Component {
  render() {    
    return (
      <View style={
        {flex: 1, justifyContent:'center',  alignItems:'center', backgroundColor: 'yellow', width: '100%'}}>
          <Text>''' PROFILE PAGE '''</Text>
      </View>
    )
  }
}

