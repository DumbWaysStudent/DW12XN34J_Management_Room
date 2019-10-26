import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { Left, Header, Right, Body } from 'native-base';
import {FlatGrid} from 'react-native-super-grid'
import {connect} from 'react-redux'
import * as actionRoom from '../redux/actions/actionRoom'


class Room extends Component {

    constructor(props){
        super(props)
        this.state = {
            interval: null
        }
    }

    
    render() {
        const {room} = this.props.roomLocal
        
        return (
            <View>
                <View>
                    <Header>
                        <Left>
                            
                        </Left>
                        <Body>
                            <Text>ROOM</Text>
                        </Body>
                        <Right>

                        </Right>
                    </Header>
                </View>
                <View>
                    <FlatGrid 
                    itemDimension={130}
                    items={room}
                    renderItem={({item, index})=>{
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    }}
                    
                    />
                </View>
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

// export default Room;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Room);