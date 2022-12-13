import React, { useState } from 'react';
import { Text, Button, StyleSheet, TextInput, SafeAreaView} from 'react-native';


export default function Register({navigation}){
    const [text, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [titleText] = useState('LogIn');
    const [loginText] = useState('LogIn');
    const [passwordText] = useState('Password');
    return(
      <SafeAreaView style={styles.container}>
        <Text style= {styles.titleText}>{titleText}</Text>
        <Text>{loginText}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Enter your email"
          value={text}
        />
        <Text>{passwordText}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Enter your password"
        />
        <Button style={styles.btn}
          title="Register"
          onPress={() => navigation.navigate('Login')}
        />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
  },
});