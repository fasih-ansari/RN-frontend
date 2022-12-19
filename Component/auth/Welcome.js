import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styleAuth from './styleAuth/indexLogin';

const Welcome = ({navigation}) => {
  return (
    <>
      <View style={styleAuth.container}>
        <Image
          source={require('../assets/med1.jpg')}
          style={styleAuth.imageBG}
        />
       <View style={styleAuth.container1}>
          <TouchableOpacity
            style={styleAuth.btnStyle}
            onPress={() => navigation.navigate('LogIn')}>
            <Text>LogIn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styleAuth.btnStyle}
            onPress={() => navigation.navigate('Register')}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Welcome;
