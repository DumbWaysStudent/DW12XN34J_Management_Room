import * as types from './../types'

const initialState = {
    room: []
}

export default function reducerRoom(state= initialState, action){
    switch (action.type){
        case `${types.GET_ROOM}_PENDING`:
        return {
            ...state
        }
        case `${types.GET_ROOM}_FULFILLED`:
        return {
            ...state,
            room: action.payload.data
        }
        case `${types.GET_ROOM}_REJECTED`:
        return {
            ...state
        }
    }
}