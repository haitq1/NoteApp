import { combineReducers } from 'redux';
import { loginReducer } from './Login.red'
import { homeReducer } from './Home.red'
import { giftReducer } from './Giftcode.red'


export default combineReducers({

    login: loginReducer,
    home: homeReducer,
    gift: giftReducer,

})