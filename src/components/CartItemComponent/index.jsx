import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import QuantitySelector from '../QuantitySelector'
import { db } from '../../../firebase'
import { doc, updateDoc } from 'firebase/firestore'

const displayPrice = (price) =>{
  var formattedPrice = price.toFixed(2)
  return "£" + formattedPrice
}

export default function CartItemComponent(props) {

  const {id,quantity,image,title,avgRating,ratings,price,oldPrice} = props.cartItem
  const [qty,setQty] = useState(quantity)

  const updateQuantity = async(newQty) => {
    setQty(newQty)
    const docRef = doc(db, 'cartitems', id)
    await updateDoc(docRef, {
      quantity: newQty
    })
  }

  return (
    <View>
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{uri: image}}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>{title}</Text>
          <View style={styles.ratingsContainer}>
            {[1,2,3,4,5].map((value,index) => 
              <FontAwesome 
                key={`${id} - ${index}`}
                name={index < Math.floor(avgRating) ? 'star' : 'star-o'}
                size={16} 
                color={'#e47911'}
              />)
            }
              <Text style={styles.noOfRatings}>{ratings}</Text>
          </View>
          <View style={styles.priceDetails}>
            <Text style={styles.price}>{displayPrice(price)}</Text>
            { oldPrice &&
                <Text style={styles.oldPrice}>{displayPrice(oldPrice)}</Text> 
            }
          </View>
        </View>
      </View>
      <View style={{marginLeft:10}}>
        <QuantitySelector
          quantity={qty}
          setQuantity={updateQuantity}
        />
      </View>
  </View>
  )
}