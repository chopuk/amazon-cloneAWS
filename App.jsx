import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Router from './src/router/Router'
import { StripeProvider } from '@stripe/stripe-react-native'
import { Amplify, Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
//import config from './src/aws-exports'
const awsmobile = {
  "aws_project_region": "eu-west-1",
  "aws_cognito_identity_pool_id": "eu-west-1:c93ccd5d-255d-4273-8c25-00bb925d4c8f",
  "aws_cognito_region": "eu-west-1",
  "aws_user_pools_id": "eu-west-1_FLA1kuJeo",
  "aws_user_pools_web_client_id": "6ri85l0p0smpqq4tecvhtm9nhl",
  "oauth": {},
  "aws_cognito_username_attributes": [],
  "aws_cognito_social_providers": [],
  "aws_cognito_signup_attributes": [
      "EMAIL"
  ],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [
      "SMS"
  ],
  "aws_cognito_password_protection_settings": {
      "passwordPolicyMinLength": 8,
      "passwordPolicyCharacters": []
  },
  "aws_cognito_verification_mechanisms": [
      "EMAIL"
  ]
}
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
