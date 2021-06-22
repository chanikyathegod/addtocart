import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import { Provider } from 'react-redux'
import store from  './src/store'
import Products from './screens/Products'
import CartPage from './screens/CartPage'
import RegisterScreen from './screens/RegisterScreen'

import LoginScreen from './screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
   
    <ScrollView>
    <Products />
    
    </ScrollView>
        
   
    );
}



const Stack = createStackNavigator();

const App = () => {
  return (
   <Provider store={store}>
    <NavigationContainer>
            <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>


<Stack.Screen name="Home" component={HomeScreen}  />

   <Stack.Screen name="LoginScreen" component={LoginScreen}  />

      <Stack.Screen name="RegisterScreen" component={RegisterScreen}  />

         
          
         
    
    <Stack.Screen name="CartPage" component={CartPage}  />

            </Stack.Navigator>
        </NavigationContainer>
 </Provider>
  )
}

export default App
