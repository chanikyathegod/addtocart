
import React ,{useState} from 'react'
import { Platform, StyleSheet, View, Text } from 'react-native';

import { useDispatch,useSelector } from 'react-redux';
import Header from './Header';
import { addToCart,deleteFromCart  } from '../src/actions/cartActions';
import { Button } from 'react-native-paper';
import { AntDesign  } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


const CartPage = () => {
     const navigation = useNavigation();


const  cartreducerstate = useSelector(state=>state.cartReducer )


const dispatch = useDispatch();

const {cartItems} = cartreducerstate;

var SUBTOTAL = cartItems.reduce((acc,item)=> acc + (item.price*item.quantity), 0)


return(
 
  <View style = { styles.MainContainer }>

<Header />





<Button onPress={() => navigation.navigate('Home')}  ><Text>Home</Text></Button>
 

<View style={{height:33}}>


  <View style={{flex:1,justifyContent:'space-around',alignItems:"center",flexDirection:'row',
  paddingBottom:10,
  borderBottomWidth:2,borderColor:'red'
  }} >

  <View ><Text>Name</Text></View>
 <View ><Text>PRICE</Text></View>
 <View ><Text>QTY</Text></View>
 <View ><Text>Total Price</Text></View>

 <View ><Text>DELETE</Text></View>
    </View>


   
 

    </View>


 {cartItems.map(item=>{


            return(
              <View key={item.name}  >
 <View style={{justifyContent:'space-around',alignItems:"center",flexDirection:'row',
  paddingBottom:10,height:'auto',
  borderBottomWidth:2,borderColor:'red',flexWrap: "wrap",

  }}  >
  
  <View style={{width:61,height:'auto',overFlow:'hidden'}}><Text>{ item.name.substring(0, 20)}</Text></View>

<View style={{width:61}} ><Text>{item.price} $</Text></View>
<View style={{width:61}} ><Text>{item.quantity}</Text></View>
<View style={{width:61}} ><Text> {item.quantity * item.price} </Text></View>

<View ><AntDesign  

onPress={()=>{dispatch(deleteFromCart(item))}}



name="delete" size={18} color="black" /></View>

</View>           
  




</View>           
  

  
  )

  
  })}

   
  

     
     <View style={ styles.bottomView} >

      
      <Text>SUBTOAL = {SUBTOTAL}$</Text>


     </View>

  </View>

);
}




const styles = StyleSheet.create(
  {
      MainContainer:
      {
          flex: 1,
     },
  
      bottomView:{
  
        width: '100%', 
        height: 50, 
        backgroundColor: '#FF9800', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
      },
  
    
  });





export default CartPage
