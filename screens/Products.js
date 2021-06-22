import React,{useState,useEffect,useContext} from 'react'
import { View, Text } from 'react-native'
import Product from './Product'
import Header from './Header'
import { useDispatch,useSelector } from 'react-redux';
import { getAllProducts  } from '../src/actions/productActions';

const Products = () => {

const getAllProductsstate = useSelector(state => state.getAllProductsReducer);

const {loading, products , error } = getAllProductsstate;




const dispatch = useDispatch();

useEffect(() => {



 dispatch(getAllProducts())
 

}, []);


  return (
  

  <View>

<Header />


 <View  style={{flexDirection:"row",width:'100%',flex:1,flexWrap:'wrap' }}>



 {loading ? (<Text>loading...</Text>) : error ?  (<Text>simnething went wrong
 ...</Text>) :  (
 products.map(product=>{
  return <Product key={product.id} product={product} />

 })
 
 
 )} 


 

 </View>






    </View>





  )
}

export default Products
