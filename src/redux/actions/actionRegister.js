import * as types from '../types'
import axios from 'axios'

export const handleRegister = (name, email, password) => ({
    type: types.REGISTER,
    payload: axios({
        method: 'POST',
        url: 'http://192.168.0.51:7000/api/v2/register',
        data: {
            name:name,
            email:email,
            password:password
        }
    })
})