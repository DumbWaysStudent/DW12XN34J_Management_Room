import React, {Component} from 'react'
import {View} from 'react-native'
import {Text}from 'native-base'
import * as actionRoom from '../redux/actions/actionRoom'
import { connect } from 'react-redux'



class Loading extends Component{
    async componentDidMount(){
        setTimeout( async () => {
          console.log(this.props.loginLocal.login.token)
          await this.props.handleGetRoom({
            token:this.props.loginLocal.login.token
          })
          this.props.navigation.navigate('Checkin')
        }, 0);
    }

    render(){
        return(
            <View>
                <Text>LOADING......</Text>
            </View>
        )
    }
}
  
  const mapStateToProps = state => {
    return {
      loginLocal: state.login
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      handleGetRoom: (params) => dispatch(actionRoom.handleGetRoom(params))      
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Loading);