import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import { Auth } from 'aws-amplify'
import QuantitySelector from '../../components/QuantitySelector'
import CustomPicker from '../../components/CustomPicker'
import Button from '../../components/Button'
import ImageCarousal from '../../components/ImageCarousal'
import { useNavigation, useRoute } from '@react-navigation/native'
import { db } from '../../../firebase'
import { doc, addDoc, getDoc, collection } from 'firebase/firestore'

const displayPrice = (price) =>{
    var formattedPrice = price.toFixed(2)
    return "£" + formattedPrice
}
export default function ProductScreen() {
  const [selectedOption, setSelectedOption] = useState('No Options')
  const [quantity,setQuantity] = useState(1)
  const [product,setProduct] = useState(null)
  const route = useRoute()
  const navigation = useNavigation()

  useEffect(() => {
    const getProduct = async () => {
      if (!route.params?.id) {
        return
      }
      const docRef = doc(db, 'products', route.params.id)
      const docSnapshot = await getDoc(docRef)
      setProduct({ ...docSnapshot.data(), id: docSnapshot.id })
    }

    getProduct()
   
  },[route.params?.id])

  useEffect(() => {
    if (product?.options) {
      setSelectedOption(product.options[0])
    }
  },[product])

  const AddToCart = async (nextScreen) => {
    const userData = await Auth.currentAuthenticatedUser()
    const newCartItem = {
      userid: userData.attributes.sub,
      quantity: quantity,
      option: selectedOption,
      productid: product.productid,
      title: product.title,
      price: product.price,
      image: product.image
    }
    await addDoc(collection(db, 'cartitems'), newCartItem)
    navigation.navigate(nextScreen)
  }

  if (!product) {
    return <ActivityIndicator/>
  }
  
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousal images={product.images}/>
      <CustomPicker
        options={product.options ? product.options : []}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <View style={styles.priceDetails}>
        <Text style={styles.price}>{displayPrice(product.price)}</Text>
        { product.oldPrice &&
            <Text style={styles.oldPrice}>{displayPrice(product.oldPrice)}</Text> 
        }
      </View>
      <Text style={styles.description}>{product.description}</Text>
     <QuantitySelector
        quantity={quantity}
        setQuantity={setQuantity}
        quantityText='Quantity:'
      />
      <Button 
        buttonText='Add To Cart'
        buttonColour='orange'
        onPress={()=> AddToCart('ShoppingCartStack')}
      />
      <Button
        buttonText='Buy Now'
        buttonColour='green'
        onPress={()=> AddToCart('CustomerDetailsScreen')}
      />
      <View style={styles.bottomPadding}></View>
    </ScrollView>
  )
}