import { getAllProductsReducer } from './reducers/productReducer';
import {cartReducer}  from './reducers/cartReducer';
import {registerNewUserReducer,loginReducer}  from './reducers/userReducer';

import { combineReducers } from 'redux'
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage';

const finalReducer = combineReducers({
getAllProductsReducer : getAllProductsReducer,      
cartReducer : cartReducer,
registerNewUserReducer:registerNewUserReducer,
loginReducer:loginReducer
})


// const cartItems = AsyncStorage.getItem('cartItems') ?
//  AsyncStorage.getItem('cartItems') : []

// const initialState = {

// addToCartReducer : {cartItems : cartItems  }                                                                                        

// }




const store = createStore(finalReducer ,applyMiddleware(thunk) )


export default store;