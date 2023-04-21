import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    paddingHorizontal:10,
    paddingTop:30
  },
  row: {

    backgroundColor:'white'
  },
  label: {
    fontWeight:'bold',
    marginTop:20
  },
  input: {
    borderWidth:1,
    borderColor:'lightgrey',
    borderRadius:5,
    marginVertical:10,
    height:38,
    paddingLeft:7
  },
  errorText: {
    color: 'red',
    fontSize:14
  }
})

export default styles