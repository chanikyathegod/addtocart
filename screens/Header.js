import React from 'react'
import { View, Text,Button } from 'react-native'
import { Appbar ,Avatar,  Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';


const Header = ({ props }) => {

     const navigation = useNavigation();

   const cartReducer = useSelector(state =>state.cartReducer);

const {cartItems} =cartReducer;                                        

  return (

        <Appbar.Header>
    
      <Appbar.Content title="HOME" />
      <Appbar.Action icon="cart"   onPress={() => navigation.navigate('CartPage')}  />
<Text style={{fontSize:33,color:'white'}}>{cartItems.length }</Text>
       
    </Appbar.Header>
   
  
 
  )
}

export default Header
