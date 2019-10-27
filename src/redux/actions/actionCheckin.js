import * as types from '../types'
import axios from 'axios'
import {API} from '../../host'

export const handleGetCheckin = (params) => ({
    type: types.GET_CHECKIN,
    payload: axios({
        method: 'GET',
        url: `${API}/checkin`,
        headers:{
            Authorization: params.token
        }
    })
})