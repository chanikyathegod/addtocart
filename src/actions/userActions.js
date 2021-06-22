
import axios from "axios";

export const regiseterNewUser =(user)=>dispatch=>{
                                                

    dispatch({type: 'USER_REGISTER_REQUEST'})

axios
.post('https://laundrydatabase.herokuapp.com/api/users/register',user)
.then(res=>{
    dispatch({type: 'USER_REGISTER_SUCCES'})

console.log(res);



})

.catch(err =>{
   dispatch({type: 'USER_REGISTER_FAILED',payload : err})

console.log(err)

})




}


 
export const loginUser =(user)=>dispatch=>{
                                                


    dispatch({type: 'USER_LOGIN_REQUEST'})

axios
.post('https://laundrydatabase.herokuapp.com/api/users/login',user)
.then(res=>{
    dispatch({type: 'USER_LOGIN_SUCCES'})


console.log(res);


 


})

.catch(err =>{
   dispatch({type: 'USER_LOGIN_FAILED',payload : err})

console.log(err);


})




}












