import { combineReducers } from 'redux';
import { loginReducer } from './Login.red'
import { homeReducer } from './Home.red'


export default combineReducers({

    login: loginReducer,
    home: homeReducer

})