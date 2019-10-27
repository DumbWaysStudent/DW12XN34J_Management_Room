import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, FlatList, Image, TouchableOpacity } from 'react-native';
import { Left, Header, Right, Body } from 'native-base';
import {FlatGrid} from 'react-native-super-grid'
import {connect} from 'react-redux'
import * as actionRoom from './../redux/actions/actionRoom'


class Room extends Component {

    constructor(props){
        super(props)
        this.state = {
            interval: null
        }
        AsyncStorage.getItem('signInData', (e, result) => {
            if (!e) {
              if (result !== null) {
                result = JSON.parse(result);
      
                this.setState({
                  signInData: result
                });
      
                this.props.handleGetRoom({
                  token: result.token
                });
              }
            }
          });
        }
    
    render() {
        return (
            <View>
                <View>
                    <Header style={styles.header}>
                        <Left></Left>
                        <Body><Text style={styles.txtHeader}>CHECK-IN</Text></Body>
                    </Header>
                    
                </View>
                <FlatGrid
                itemDimension={130}
                style={styles.grid}
                items={this.props.roomLocal.room}
                renderItem={({ item, index }) => (
                    <TouchableOpacity>
                        <View style={styles.viewGrid}>
                            <Text style={styles.txtGrid}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>  
                )}
          
                />
          </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        roomLocal: state.room
    }
}

const mapDispatchToProps = dispatch => {
    return{
        handleGetRoom: (params) => dispatch(actionRoom.handleGetRoom(params))
    }
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#fda22d'
    },
    txtHeader:{
        fontSize:24,
        paddingLeft:25,
        fontWeight:'bold'
    },
    viewGrid:{
        backgroundColor:'tomato',
    },
    txtGrid:{
        marginVertical:30,
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center'
    }
  
}); 

// export default Room;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Room);