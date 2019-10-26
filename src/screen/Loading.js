import React, { Component } from 'react';
import {View, Text} from 'react-native'
import * as actionRoom from '../redux/actions/actionRoom'
import {connect} from 'react-redux'

class Loading extends Component {
    async componentDidMount(){
        setTimeout( async () => {
          console.log(this.props.loginLocal.login.token)
          await this.props.handleGetRooms({
            token:this.props.loginLocal.login.token
          })
          this.props.navigation.navigate('Room')
        }, 0);
    }
    render() {
        return (
            <View>
                <Text>LOADING.....</Text>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
      loginLocal: state.login,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      handleGetRoom: (params) => dispatch(actionRoom.handleGetRoom(params))      
    }
  }

// export default Loading;
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Loading);