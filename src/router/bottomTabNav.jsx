import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'
import ProductScreen from '../screens/ProductScreen'
import CustomerDetailsScreen from '../screens/CustomerDetailsScreen'
import HomeStack from './HomeStack'
import ShoppingCartStack from './ShoppingCartStack'
import MenuScreen from '../screens/MenuScreen'

const Tab = createBottomTabNavigator()

const screenOptions = {
    headerShown: false
}

const BottomTabNav = () => {
  return (
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: '#a8bda6' }
          })}
        >
          <Tab.Screen 
            name='HomeStack' 
            component={HomeStack}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Entypo name='home' size={size} color={color} />
              )
            }}
            
          />
          <Tab.Screen 
            name='CustomerDetailsScreen' 
            component={CustomerDetailsScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Entypo name='user' size={size} color={color} />
              )
            }}
          />
          <Tab.Screen 
            name='ShoppingCartStack' 
            component={ShoppingCartStack}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Entypo name='shopping-cart' size={size} color={color} />
              )
            }}
          />
          <Tab.Screen 
            name='Menu' 
            component={MenuScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Entypo name='menu' size={size} color={color} />
              )
            }}
          />

        </Tab.Navigator>
  )
}

export default BottomTabNav