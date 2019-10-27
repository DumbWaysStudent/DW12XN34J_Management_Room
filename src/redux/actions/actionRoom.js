import * as types from '../types'
import axios from 'axios'
import {API} from '../../host'

export const handleGetRoom = (params) => ({
    type: types.GET_ROOM,
    payload: axios({
        method: 'GET',
        url: `${API}/rooms`,
        headers:{
            Authorization: params.token
        }
    })
})

export const handleAddRoom = (params) => ({
    type: types.ADD_ROOM,
    payload: axios({
        method: 'POST',
        url: `${API}/room`,
        data:{
            name: params.name
        },
        headers: {
            Authorization: params.token
        }
    })
})

export const handleUpdateRoom = (params) => ({
    type: types.UPDATE_ROOM,
    payload: axios({
        method: 'PUT',
        url: `${API}/room/${params.id}`,
        data:{
            name: params.name
        },
        headers: {
            Authorization: params.token
        }
    })
})