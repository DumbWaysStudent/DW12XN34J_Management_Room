import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

import SwitchNav from '../../navigation/SwitchNav'
import reducerLogin from './../reducers/reducerLogin'
import reducerRegister from './../reducers/reducerRegister'
import reducerRooms from './../reducers/reducerRooms'
import reducerCheckin from './../reducers/reducerCheckin'


const reduceRouter = createNavigationReducer(SwitchNav)

const appReducer = combineReducers({
    router: reduceRouter,
    login: reducerLogin,
    register: reducerRegister,
    room: reducerRooms,
    checkin: reducerCheckin
})

export default appReducer