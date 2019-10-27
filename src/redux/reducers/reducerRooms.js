import * as types from './../types'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  rooms: [],
  addRoom: [],
  updateRoom: []
};

export default function reducerRooms(state = initialState, action) {
  switch (action.type) {
    case `${types.GET_ROOM}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.GET_ROOM}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        rooms: action.payload.data
      };

    case `${types.GET_ROOM}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };


      //ADD ROOM

    case `${types.ADD_ROOM}_PENDING`:
      return {
        ...state,
        isLoading:true
      };

    case `${types.ADD_ROOM}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        addRoom: action.payload.data
      };
    
    case `${types.ADD_ROOM}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    // UPDATE ROOM
    case `${types.UPDATE_ROOM}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    
    case `${types.UPDATE_ROOM}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        updateRoom: action.payload.data
      };
    
    case `${types.UPDATE_ROOM}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
}