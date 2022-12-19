import React, { useState } from 'react';
import {Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import styles from '../styles';

export default function Register({navigation}) {
  const [user, setUser] = useState({
    name:"",email:"",password:"",cpassword:"", phone:"",cnic:""
  });
  let name, value;
  const handleInputs = (e)=>{
    console.log(e);
    name= e.target.name;
    value= e.target.value;

    setUser({...user, [name]: value});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Register Here!</Text>
      <Text style={styles.Text}>Username</Text>
      <TextInput
        style={styles.input}
        onChange={handleInputs}
        placeholder="Enter your username"
        value={user.name}
        
      />
      <Text style={styles.Text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputs}
        placeholder="Enter your email"
        value={user.email}
      />
      <Text style={styles.Text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputs}
        value={user.password}
        placeholder="Enter your password"
      />
       <Text style={styles.Text}> Confirm Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputs}
        value={user.cpassword}
        placeholder="Enter your password"
      />
      <Text style={styles.Text}>CNIC</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputs}
        placeholder="Enter your CNIC"
        value={user.cnic}
      />
      <Text style={styles.Text}>Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputs}
        placeholder="Enter your username"
        value={user.phone}
      />
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate('Blood')}>
        <Text>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
