import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ComB from './ComB'
export default class ComA extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{width: 300, height: 300, backgroundColor: 'blue',
       justifyContent: 'center', alignItems: 'center'}}>
           <ComB />
      </View>
    );
  }
}
