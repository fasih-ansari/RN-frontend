import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity, AntDesign } from "react-native";
import styles from '../styles';
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from "../navigation/data/data";

export default function Blood({navigation}){
    const isCarousel = React.useRef(null)

    
    return(
        <View>
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
    
   
         <TouchableOpacity style={styles.req}>
        <Text>Search Blood</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.donate}  onPress={()=>navigation.navigate('Donate')}>
        <Text>Register As A Donor</Text>
      </TouchableOpacity>

        

    </View>
    );
}
