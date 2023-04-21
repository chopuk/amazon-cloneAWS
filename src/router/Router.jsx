import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNav from './bottomTabNav'

const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false
}

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='BottomTabNav'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='BottomTabNav' component={BottomTabNav} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router