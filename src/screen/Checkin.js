import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList,AsyncStorage} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import { Content, Header, Body, Title, List, ListItem, Container, Card, Left, Right } from 'native-base';
import { connect } from 'react-redux'
import * as actionCheckin from '../redux/actions/actionCheckin'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Checkin extends Component {
    constructor(props){
        super(props)
        this.state = {
        };

        AsyncStorage.getItem('signInData', (e, result) => {
            if (!e) {
              if (result !== null) {
                result = JSON.parse(result);
      
                this.setState({
                  signInData: result
                });
      
                this.props.handleGetCheckin({
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
                items={this.props.checkinLocal.checkin}
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
      checkinLocal: state.checkin
    }
}
const mapDispatchToProps = dispatch => {
    return {   
      handleGetCheckin: (params) => dispatch(actionCheckin.handleGetCheckin(params))
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

// export default Checkin;
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Checkin);