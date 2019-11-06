import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,AsyncStorage,TextInput, ImageBackground} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import { Icon, Header, Body, Left, Button } from 'native-base';
import { connect } from 'react-redux'
import Modal from 'react-native-modal'
import * as actionRooms from '../redux/actions/actionRooms'

class Room extends Component {
    constructor(props){
        super(props)
        this.state = {
            isModalVisible: false,
            isModalVisibleEdit: false,
            name: '',
            idRoom:''
            // token: ''
        };
    }
   
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    toggleModalEdit = (id, name) => {
        this.setState({ isModalVisibleEdit: !this.state.isModalVisibleEdit })
        this.setState({name: name} )
        this.setState({idRoom: id})
    }

    componentDidMount = async () => {
        AsyncStorage.getItem('token')
        await this.props.handleGetRooms()
        await this.props.roomsLocal.rooms
    }

    handleAddRoom = async () =>
    {
        // const token = this.props.loginLocal.login.token;
        const token = await AsyncStorage.getItem('token')
        const name = this.state.name;
        if (name !== '') {
            await this.props.handleAddRoom(name, token);
            await this.setState({isModalVisible: false})
            await this.props.handleGetRooms()
        } else {
            Alert.alert('Warning','Field Name is Required')
        }
    };

    handleEditRoom =  async () => {
        const name = this.state.name
        const id = this.state.idRoom
        // const token = this.props.loginLocal.login.token
        const token = await AsyncStorage.getItem('token')

        await this.props.handleUpdateRoom(id, name, token)
        await this.setState({isModalVisibleEdit: false})
        await this.props.handleGetRooms()
        await this.setState({name: ''})
        await this.setState({idRoom: ''})
    }


    
    render() {
        return (
            <View style={styles.flexAll}>
                <Header style={styles.bar}>
                    <ImageBackground source={require('../img/bar.png')} style={styles.imageHeader}>
                        <Text style={styles.header}>ROOM</Text>
                    </ImageBackground>
                </Header>

                <View style={styles.flexOne}>
                        <FlatGrid
                        itemDimension={120}
                        style={styles.grid}
                        scrollEnabled
                        items={this.props.roomsLocal.rooms}
                        renderItem={({ item, index }) => (
                            <View>
                                <TouchableOpacity onPress={() => {this.toggleModalEdit(item.id, item.name)}}>
                                    <View style={styles.viewGrid}>
                                        <Text style={styles.txtGrid}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                
                        />
                </View>
                
                {/* Modal */}

                <View style={styles.flexIcon}>
                    <View style={styles.iconView}>
                        <Icon name='add' onPress={this.toggleModal} style={styles.iconAdd} />
                        <Modal isVisible={this.state.isModalVisible} animationIn='slideInUp' animationOut='zoomOut' >
                            <View style={styles.modalView}>
                                <View style={styles.modalContent}>
                                    <Text style={styles.txtHeaderAdd}>Add Room</Text>
                                    <View>
                                        <Text style={styles.labelAdd}>Room Name</Text>
                                        <TextInput 
                                            style={styles.inputBox}
                                            value={this.state.name}
                                            onChangeText={(text) => this.setState({ name: text})}
                                        />
                                    </View>
                                </View>  
                                <View style={styles.modalContent2}>
                                    <View style={styles.btnRow}>
                                        <Button block style={styles.btnCancel} onPress={this.toggleModal}>
                                            <Text style={styles.txtbtnAdd}>Cancel</Text>
                                        </Button>
                                        <Button block style={styles.btnSave} onPress={() =>{this.handleAddRoom();}}>
                                            <Text style={styles.txtbtnAdd}>Save</Text>
                                        </Button>
                                    </View>                                    
                                </View>                              
                            </View>
                        </Modal>
                    </View>
                </View>
               {/* END MODAL */}

               {/* Modal Edit */}
               <Modal isVisible={this.state.isModalVisibleEdit} animationIn='slideInUp' animationOut='zoomOut'>
                    <View style={styles.modalView}>
                        <View style={styles.modalContent}>
                            <Text style={styles.txtHeaderAdd}>Edit Room</Text>
                                <View>
                                    <Text style={styles.labelAdd}>Room Name</Text>
                                    <TextInput 
                                        style={styles.inputBox}
                                        value={this.state.name}
                                        onChangeText={(text) => this.setState({ name: text})}
                                    />
                                </View>
                        </View>  
                        <View style={styles.modalContent2}>
                            <View style={styles.btnRow}>
                                <Button block style={styles.btnCancel} onPress={this.toggleModalEdit}>
                                    <Text style={styles.txtbtnAdd}>Cancel</Text>
                                </Button>
                                <Button block style={styles.btnSave} onPress={() =>{this.handleEditRoom();}}>
                                    <Text style={styles.txtbtnAdd}>Save</Text>
                                </Button>
                            </View>                                    
                        </View>                              
                    </View>
                </Modal>
                {/* END Modal Edit */}
          </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginLocal: state.login,
        roomsLocal: state.rooms
    }
}
const mapDispatchToProps = dispatch => {
    return {   
      handleGetRooms: () => dispatch(actionRooms.handleGetRooms()),
      handleAddRoom: (name, token) => dispatch(actionRooms.handleAddRoom(name, token)),
      handleUpdateRoom: (id, name, token) => dispatch(actionRooms.handleUpdateRoom(id, name, token))
    }
}
const styles = StyleSheet.create({
    flexAll:{
        flex:1,
    },
    flexOne:{
        flex:9
    },
    bar:{
        backgroundColor:'#305f72'
    },
    header:{
        textAlign: 'center',
        color:'#fff',
        marginTop:10,
        alignSelf:'center',
        fontSize:28,
        textShadowColor: 'rgba(72,76,127, 100)',
        textShadowOffset: {width: -1, height: 5},
        textShadowRadius: 2,
        fontFamily: 'Rakoon_PersonalUse', 
      },
    imageHeader:{
        width:250,
        height:60
    },
    txtHeader:{
        color:'white',
        textAlign: 'center',
        justifyContent:'center',
        alignSelf:'center',
        fontSize:24,
    },
    viewGrid:{
        backgroundColor:'#70416d',
    },
    txtGrid:{
        marginVertical:30,
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    },
    flexIcon:{
        flex: 2
    },
    iconAdd:{
        backgroundColor: '#484c7f',
        width:100,
        alignSelf:'center',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:80,
        color:'white',
        marginTop:10
    },
    modalView:{
        backgroundColor:'#305f72',
        borderWidth:2,
        borderColor:'white',
        borderRadius:10
        // height:400,
    },
    modalContent:{
        margin:15,
        // flex: 1,
        height:null,
    },
    txtHeaderAdd:{
        fontSize:24,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom: 20,
        color:'white',
        borderColor:'white',
        borderBottomWidth:2
    },
    inputBox: {  
        width:250,
        height:50,
        backgroundColor:'white',
        fontSize:18,
        color:'#000',
        borderColor:'white',
        borderWidth:2,
        borderRadius:5,
        alignSelf:'center'
    },
    labelAdd:{
        fontSize:20,
        marginLeft:35,
        color:'white'
    },
    modalContent2:{
        marginBottom:15

    },
    btnCancel:{
        width:100,
        backgroundColor:'#70416d',
    },
    btnSave:{
        width:100,
        marginLeft:10,
    },
    btnRow:{
        flexDirection:'row',
        alignSelf:'center'
    },
    txtbtnAdd:{
        // marginLeft:30,
        color:'white'
    }
  
});  

// export default Checkin;
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Room);