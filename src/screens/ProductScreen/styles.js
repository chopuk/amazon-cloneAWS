import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    padding:10,
    backgroundColor:'white'
  },
  title: {
    fontWeight:'bold',
    fontSize:16
  },
  price: {
    fontSize:16,
    fontWeight:'bold'
  },
  oldPrice: {
    textDecorationLine:'line-through',
    marginLeft:10,
    fontSize:14
  },
  priceDetails: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:5
  },
  description: {
    marginVertical:10
  },
  bottomPadding: {
    height:50
  }
})

export default styles