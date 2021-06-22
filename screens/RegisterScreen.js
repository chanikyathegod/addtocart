import React,{useState} from 'react'
import { View, Text,Alert  } from 'react-native'
import { TextInput,Button  } from 'react-native-paper';
import { useDispatch,useSelector } from 'react-redux';
import { regiseterNewUser  } from '../src/actions/userActions';






const RegisterScreen = (props) => {








  const dispatch = useDispatch();


const[name,setName] = useState('');

const[email,setEmail] = useState('');

const[phone,setPhone] = useState('');


const[password,setPassword] = useState('');

const[cpassword,setCpassword] = useState('');




function register(){
const user = {

name:name,

email:email,

phone:phone,

password:password,


}


if(password==cpassword){

dispatch(regiseterNewUser(user))
}

else{
 Alert.alert('passowrd not matched');
}



}







    return (
          <View style={{flex:1}}>




<View style={{height:65,justifyContent: 'center',
flexDirection:'row',
alignItems:'center',backgroundColor:'#2980b9'}}>
 
     
     
<Text style={{color:'white',textAlign:'center',fontSize:20}}>
 
          
           Registration Form
             
              </Text>

              



              </View>



              <View style={{flex:1,justifyContent:'center',paddingHorizontal:23,}}>


    <View style={{paddingVertical:'4%',}}>
  
  <TextInput
      label="Name"
        onChangeText={(value) => {setName(value)}}

    />



</View>

<View style={{paddingVertical:'4%',}}>
  
  <TextInput
      label="Email Id"
     onChangeText={(value) => {setEmail(value)}}
    />



</View>
<View style={{paddingVertical:'4%',}}>
  
  <TextInput
      label="Phone Number"
       onChangeText={(value) => {setPhone(value)}}
    />



</View>



<View style={{paddingVertical:'4%',}}>
  
  <TextInput
      label="Password"
  onChangeText={(value) => {setPassword(value)}}
    />



</View>
<View style={{paddingVertical:'4%',}}>
  
  <TextInput
      label="ReEnter Password"
  onChangeText={(value) => {setCpassword(value)}}
    />



</View>

<View style={{paddingVertical:'4%',width:'53%',marginLeft:'20%'}}>
  



<Button  mode="contained"  
onPress={register} style={{backgroundColor:'#019FE3',}}>
  Submit
  </Button>




  </View>






</View>



</View>
    )
}

export default RegisterScreen
