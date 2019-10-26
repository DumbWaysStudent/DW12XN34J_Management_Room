import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';


import Customer from '../screen/Customer';
import Setting from '../screen/Setting'
import Checkin from '../screen/Checkin'
import Room from '../screen/Room'

const BottomTabNavigator = createMaterialBottomTabNavigator({
    Checkin: {
        screen: Checkin,
        navigationOptions: {
            tabBarLabel: 'For You',
            tabBarIcon : ({tintColor}) => (
                <Icon name='home' size={20} color={(tintColor)} />
            )
        }
    },
    Room: {
        screen: Room,
        navigationOptions: {
            tabBarLabel: 'Favorit',
            tabBarIcon: ({tintColor}) => (
                <Icon name='bed' size={20} color={(tintColor)} />
            )
        }
    },
    Customer:{
        screen: Customer,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => (
                <Icon name="contact" size={20} color={(tintColor)} />
            )
        }
    },
    Setting:{
        screen: Setting,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => (
                <Icon name="setting" size={20} color={(tintColor)} />
            )
        }
    },
},

{    
    initialRouteName: 'Checkin',
    tabBarOptions:{
        activeTintColor:'#fff',
        // inactiveTintColor:'red',
        // style:{backgroundColor:'red'}
    },
    barStyle:{backgroundColor:'#fc4a1a'}
    // activeTintColor: '#fff',  
    // inactiveTintColor: '#000',  
    // barStyle: { backgroundColor: '#4287f5' },  
  }, 
)


export default createAppContainer(BottomTabNavigator);