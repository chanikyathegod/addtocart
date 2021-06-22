
import React ,{useState} from 'react'
import { View,ScrollView,Text } from 'react-native'
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


    return (
      <ScrollView style={{flex: 1
}}>
      
     
        <View style={{flex: 1
}}> 

        <Header />





<Button onPress={() => navigation.navigate('Home')}  ><Text>Home</Text></Button>
 

<View style={{flex: 1}}>


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
              <View key={item.name} >
 <View style={{flex:1,justifyContent:'space-around',alignItems:"center",flexDirection:'row',
  paddingBottom:10,
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

   

<View  style={{position:'relative',bottom:0}}><Text>SUBTOAL = {SUBTOTAL}$</Text></View>



        </View>




       



        </ScrollView>
    )
}

export default CartPage
