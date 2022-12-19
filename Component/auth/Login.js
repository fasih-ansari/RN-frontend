import {Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import React, { useState } from 'react';
import styleAuth from './styleAuth/indexLogin';
import styles from '../styles';

const LogIn = ({navigation}) => {
  const [fdata, setFdata] = useState({
    email:'',
    password:''
  })

  const Sendtobackend=()=>{
    if(fdata.email=='' || fdata.password==''){
      setErrormsg('All fields must be filled!');
      return;
    }
    else{
      fetch('http://192.168.1.105:3000/signin', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fdata)
      })
      .then(res=>res.json()).then(
        data=>{
          if(data.error){
            setErrormsg(data.error)
          }
          else{
            alert('Login Successfully!');
            navigation.navigate('Blood');
          }
        }
      )
    }
  }
  const [errormsg, setErrormsg]=useState(null);
  return (
    <>
      <View style={styleAuth.container}>
        <Image
          source={require('../assets/med1.jpg')}
          style={styleAuth.imageBG}
        />
        <View style={styleAuth.container2}>
          <View style={styleAuth.s1}>
            <Text style={styleAuth.head}>DAAKTER SAAB</Text>
          </View>
          <ScrollView style={styleAuth.s2}>
            <Text style={styleAuth.h1}>LogIn</Text>
            <Text style={styleAuth.h2}>Sign in to continue</Text>
           { errormsg ? <Text style={styles.errormsg}>{errormsg}</Text> : null}
            <View style={styleAuth.Lform}>
              <Text style={styleAuth.label}>Email</Text>
              <TextInput style={styleAuth.input}
              onPressIn={()=> setErrormsg(null)}
              onChangeText={(text)=>setFdata({
                ...fdata, email: text
              })}/>
              <Text style={styleAuth.label}>Password</Text>
              <TextInput style={styleAuth.input} 
              onPressIn={()=>setErrormsg(null)}
              secureTextEntry={true}
              onChangeText={(text)=>setFdata({...fdata, password:text})}/>
              <View style={styleAuth.fp}>
              <Text style={styleAuth.link}>Forgot Password?</Text>
              </View>
              <TouchableOpacity
        style={styleAuth.btnStyle}
        onPress={() => Sendtobackend()}>
        <Text>LogIn</Text>
      </TouchableOpacity>
      <Text style={styleAuth.h3}>Don't have an account?<Text style={styleAuth.link}> Click Here!</Text></Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default LogIn;
