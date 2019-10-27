import * as types from '../types'
import axios from 'axios'

export const handleGetCustomer = () => ({
    type: types.GET_CUSTOMER,
    payload: axios({
        method: 'GET',
        url: 'http://192.168.0.51:7000/api/v2/customers',
        // headers:{
        //     Authorization: `${params.token}`
        // }
    })
})