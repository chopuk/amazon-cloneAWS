import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../components/Button'
import { Auth } from 'aws-amplify'

const Signout = () => {
    Auth.signOut()
}

const MenuScreen = () => {
  return (
    <SafeAreaView>
        <Button 
            buttonText='Sign Out'
            buttonColour='orange'
            onPress={Signout}
        />
    </SafeAreaView>
  )
}

export default MenuScreen