import React,{ useState } from 'react'
import { View, Text } from 'react-native'
import { Appbar ,Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart  } from '../src/actions/cartActions';
import {Picker} from '@react-native-picker/picker';

const Product = ({product}) => {


const dispatch = useDispatch();

  const [quantity, SetQuantity] = useState(1);

 
function addtocart() { 
  
 dispatch(addToCart(product,quantity))


}


  return (
<>

 

  <View style={{padding:5,width:'50%'}}> 
        <Card style={{borderWidth:3,
        alignItems:'center',
        justifyContent:'center',borderColor:'#34495e',padding:3}}> 
          <Card.Title
    title={product.name}
    
  />
    <Card.Content>
   
    </Card.Content>

    <Card.Cover source={{uri:product.image}}  style={{height:133,width:133,}}/>



 <Picker
 
  selectedValue={quantity} 
  onValueChange={(itemValue, itemIndex) =>
    SetQuantity(itemValue)   }>
     <Picker.Item label="1" value="1" />
  <Picker.Item label="2" value="2" />  
  <Picker.Item label="3" value="3" />
   <Picker.Item label="4" value="4" />
</Picker>


   
    <Card.Actions>
      <Button icon="cart" mode="contained" onPress={addtocart}>
    ADD TO CART 
  </Button>

    </Card.Actions>
  </Card>
   </View>
      
    





  </>
  )
}

export default Product
