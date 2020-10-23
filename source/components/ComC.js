import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';


class ComC extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{width: 100, height: 100, backgroundColor: this.props.bgColor,
       justifyContent: 'center', alignItems: 'center'}}>
           {this.props.number > 0 ? 
            <Text style={{color: 'red', fontSize: 30}}>{this.props.number}</Text> 
            : <Text style={{color: 'red', fontSize: 30}}>0</Text>
          }
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUpnumber : (number) => dispatch(upNumber(number))
//   }
// }

export default connect(mapStateToProps, null)(ComC)
