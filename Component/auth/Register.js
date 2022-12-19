import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import styleAuth from './styleAuth/indexRegister';
import styles from '../styles';

const Register = ({navigation}) => {
  const [fdata, setFdata] = useState({
    name:'',
    email:'',
    password:'',
    cnic:'',
    phone:''
  });
  const [errormsg, setErrormsg] = useState(null);
  const Sendtobackend = ()=>{
    // console.log(fdata);
    if(fdata.name=='' || fdata.email=='' || fdata.password=='' || fdata.cnic=='' || fdata.phone==''){
      setErrormsg('All fields must be filled!');
      return;
    }
    else {
      fetch('http://192.168.1.105:3000/signup',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fdata)
      })
      .then(res => res.json()).then(
        data =>{
          // console.log(data);
          if(data.error){
            setErrormsg(data.error);
          }
          else{ alert('registered Successfully!');
          navigation.navigate('LogIn');
        
        }
        }
      )
    }
  }
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
            <Text style={styleAuth.h1}>Create a New Account</Text>
            <Text style={styleAuth.h3}>
              Already have a account?
              <Text style={styleAuth.link}> Login here!</Text>
            </Text>
            {
              errormsg ? <Text style={styles.errormsg}>{errormsg}</Text> : null
            }
            <View style={styleAuth.Rform}>
              <Text style={styleAuth.label}>Username</Text>
              <TextInput style={styleAuth.input} 
              onPressIn={()=> setErrormsg(null)}
              onChangeText={(text)=>setFdata({...fdata, name:text})}/>
              <Text style={styleAuth.label}>Email</Text>
              <TextInput style={styleAuth.input} 
              onPressIn={()=>setErrormsg(null)}
              onChangeText={(text)=>setFdata({...fdata, email:text})}/>
              <Text style={styleAuth.label}>Password</Text>
              <TextInput style={styleAuth.input}
              onPressIn={()=> setErrormsg(null)}
              secureTextEntry={true} 
              onChangeText={(text)=>setFdata({...fdata, password:text})}/>
              <Text style={styleAuth.label}>Cnic</Text>
              <TextInput style={styleAuth.input} 
              onPressIn={()=> setErrormsg(null)}
              onChangeText={(text)=>setFdata({...fdata, cnic:text})}/>
              <Text style={styleAuth.label}>Phone No.</Text>
              <TextInput style={styleAuth.input} 
              onPressIn={()=> setErrormsg(null)}
              onChangeText={(text)=>setFdata({...fdata, phone:text})}/>
              <TouchableOpacity
                style={styleAuth.btnStyle}
                onPress={() =>{Sendtobackend();}}>
                <Text>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Register;
