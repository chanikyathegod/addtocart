
export const addToCart =(product, quantity)=>(dispatch,getState)=>{

const cartItem = {

name : product.name,
_id : product._id,
price:product.price,
countInStock : 11,
quantity:quantity,

 

}                                                       

dispatch({type: 'ADD_TO_CART',payload: cartItem})


// AsyncStorage.setItem('cartItems', JSON.stringify(getState().addToCartReducer.cartItems));




}








export const deleteFromCart =(item)=>(dispatch)=>{


dispatch({type:'DELETE_FROM_CART',payload:item})


}