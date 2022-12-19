import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { horizontalScale,moderateScale, verticalScale  } from "../navigation/data/metrics";
export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH *0.9)

const CarouselCardItem = ({ item, index }) => {
  return (
    <SafeAreaView style={styles.main}>
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main:{
   
    paddingTop:50
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    horizontalScale:260,
    shadowOpacity: 0.29,
    shadowRadius: 3,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color: "#222",
    fontSize: 37,
    fontWeight: "bold",
   
  },
  body: {
    color: "#222",
    fontSize: 18,
    
  }
})

export default CarouselCardItem