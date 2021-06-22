
import axios from "axios";


export const getAllProducts =()=>dispatch=>{

dispatch({type:'GET_PRODUCTS_REQUEST'})
axios.get('https://laundrydatabase.herokuapp.com/api/products/getAllPorducts')
  .then(function (res) {
    // handle success
   
    
dispatch({type:'GET_PRODUCTS_SUCCESS',payload : res.data})

  })
  .catch(function (error) {
    // handle error
    console.log(error);
    dispatch({type:'GET_PRODUCTS_FAILED',payload : res.error})
  })
  


}