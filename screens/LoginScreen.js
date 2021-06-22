import React,{useState} from 'react'
import { View, Text,Alert  } from 'react-native'
import { TextInput,Button  } from 'react-native-paper';
import { useDispatch,useSelector } from 'react-redux';
import { loginUser  } from '../src/actions/userActions';

import { useNavigation } from '@react-navigation/native';

import Header from './Header'



const LoginScreen = (props) => {








  const dispatch = useDispatch();



const[email,setEmail] = useState('');

const[password,setPassword] = useState('');




function login(){
const user = {

email:email,

password:password,


} 



dispatch(loginUser(user))



}







    return (
          <View style={{flex:1}}>

<Header />

<View style={{height:65,justifyContent: 'center',
flexDirection:'row',
alignItems:'center',backgroundColor:'#2980b9'}}>
 
     
     
<Text style={{color:'white',textAlign:'center',fontSize:20}}>
 
          
           Login 
             
              </Text>

              



              </View>



              <View style={{flex:1,justifyContent:'center',paddingHorizontal:23,}}>




<View style={{paddingVertical:'4%',}}>
  
  <TextInput
      label="Email Id"
     onChangeText={(value) => {setEmail(value)}}
    />


</View>



<View style={{paddingVertical:'4%',}}>
  
  <TextInput
      label="Password"
  onChangeText={(value) => {setPassword(value)}}
    />



</View>




</View>

<View style={{paddingVertical:'4%',width:'53%',marginLeft:'20%'}}>
  



<Button  mode="contained"  
onPress={login} style={{backgroundColor:'#019FE3',}}>
  Login
  </Button>




  </View>






</View>



    )
}

export default LoginScreen
