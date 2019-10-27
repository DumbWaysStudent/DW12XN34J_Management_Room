import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    customer: []
}

export default function reducerCustomer(state = initialState, action){
    switch (action.type){
        case `${types.GET_CUSTOMER}_PENDING`:
        return {
            ...state,
            isLoading:true
        }
        case `${types.GET_CUSTOMER}_FULFILLED`:
        return {
            ...state,
            isLoading:false,
            isSuccess:true,
            customer: action.payload.data
        }
        case `${types.GET_CUSTOMER}_REJECTED`:
        return {
            ...state,
            isLoading:false,
            isError:true
        }
    }
}