import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ProductScreen from '../screens/ProductScreen'
import Feather from 'react-native-vector-icons/Feather'
import { Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={20} />
        <TextInput
          style={{height: 40, marginLeft: 10}}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  )
}

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('')
  const screenOptions = {   
    headerShown: true,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    header: () => (
      <HeaderComponent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    )
  }
  return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen 
              name='HomeScreen'
              options={{
                title:'Home'
              }}
            >
              {/* Homescreen needs to be called like this
              because I am passing props to it */}
              {() => <HomeScreen searchValue={searchValue} />}
            </Stack.Screen>
            <Stack.Screen 
              name='ProductScreen'
              component={ProductScreen}
              options={{title:'Product Details'}}
            />
        </Stack.Navigator>

  )
}

export default HomeStack