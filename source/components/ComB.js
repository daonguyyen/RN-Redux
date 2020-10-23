import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ComC from './ComC'
export default class ComB extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{width: 200, height: 200, backgroundColor: 'red',
       justifyContent: 'center', alignItems: 'center'}}>
          <ComC /> 
      </View>
    );
  }
}
