import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ComA from './ComA'

import {upNumber, downNumber, changeBgColor} from '../actions/number'
import {connect} from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={this.props.onUpnumber}>
              <Text style={{fontSize: 30}}>Click +</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onDownnumber}>
              <Text style={{fontSize: 30}}>Click -</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onChangeBgColor}>
              <Text style={{fontSize: 30}}>Change BG Color</Text>
          </TouchableOpacity>
            <ComA />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number : state.numberReducer.number,
    bgColor : state.numberReducer.bgColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpnumber : (number) => dispatch(upNumber(number)),
    onDownnumber : (number) => dispatch(downNumber(number)),
    onChangeBgColor : (bgColor) => dispatch(changeBgColor(bgColor))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)