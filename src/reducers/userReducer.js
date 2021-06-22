

export  const registerNewUserReducer = (state={},action) => {
    switch (action.type) {

    case 'USER_REGISTER_REQUEST': return{

...state,
loading: true

    }
    
     case 'USER_REGISTER_SUCCES': return{

...state,
loading: false,
succes:true

    }
    
    case 'USER_REGISTER_FAILED': return{

...state,
loading: true,
error : 'user already registerred'

    }
    default: return state

}




}



export  const loginReducer = (state={},action) => {
    switch (action.type) {

    case 'USER_LOGIN_REQUEST': return{

...state,
loading: true

    }
    
     case 'USER_LOGIN_SUCCES': return{

...state,
loading: false,
succes:true

    }
    
    case 'USER_LOGIN_FAILED': return{

...state,
loading: true,
error : 'invalid credintrails'
    }
    default: return state

}




}



