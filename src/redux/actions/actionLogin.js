import * as types from '../types'
import axios from 'axios'

export const handleLogin = (email,password) => ({
    type: types.LOGIN,
    payload: axios({
        method: 'POST',
        url: 'http://192.168.0.51:7000/api/v2/login',
        data:{
            email,
            password
        }
    }),
    // payload: axios.post('https://skytoon-api.herokuapp.com/api/v1/login',{
    //     email,
    //     password
    // })
})