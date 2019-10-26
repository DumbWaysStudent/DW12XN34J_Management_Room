import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

import SwitchNav from '../../navigation/SwitchNav'
import reducerLogin from './../reducers/reducerLogin'
import reducerRegister from './../reducers/reducerRegister'
import reducerRoom from './../reducers/reducerRoom'


const reduceRouter = createNavigationReducer(SwitchNav)

const appReducer = combineReducers({
    router: reduceRouter,
    login: reducerLogin,
    register: reducerRegister,
    room: reducerRoom
})

export default appReducer