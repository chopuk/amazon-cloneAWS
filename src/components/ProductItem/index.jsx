import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const displayPrice = (price) =>{
  var formattedPrice = price.toFixed(2)
  return "£" + formattedPrice
}

export default function ProductItem(props) {
  const {id,title,image,avgRating,ratings,price,oldPrice} = props.item
  const navigation = useNavigation()
  const showDetails = () => {
    navigation.navigate('ProductScreen', {id: id})
  }
  return (
    <Pressable onPress={showDetails} style={styles.root}>
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
  </Pressable>
  )
}