import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Router from './src/router/Router'
import { StripeProvider } from '@stripe/stripe-react-native'
import { Amplify, Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import config from './src/aws-exports'
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true
  }
})

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <StripeProvider publishableKey='pk_test_maRtZ2uTPZf2XpvUfAMCDcDd'>
         <Router/>
      </StripeProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default withAuthenticator(App) 
