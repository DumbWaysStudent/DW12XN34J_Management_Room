import * as types from '../types'
import axios from 'axios'

export const handleGetRoom = (params) => ({
    type: types.GET_ROOM,
    payload: axios({
        method: 'GET',
        url: 'http://192.168.0.5:7000/api/v2/rooms',
        headers:{
            Authorization: `${params.token}`
        }
    })
})