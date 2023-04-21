import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShoppingCartScreen from '../screens/ShoppingCartScreen'
import CustomerDetailsScreen from '../screens/CustomerDetailsScreen'

const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: true,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#f4511e',
    }
}

const ShoppingCartStack = () => {
  return (

        <Stack.Navigator
            initialRouteName='ShoppingCartScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen 
              name='ShoppingCartScreen'
              component={ShoppingCartScreen}
              options={{title:'Shopping Cart'}}
            />
            <Stack.Screen 
              name='CustomerDetailsScreen'
              component={CustomerDetailsScreen}
              options={{title:'Customer Details'}}
            />
        </Stack.Navigator>

  )
}

export default ShoppingCartStack