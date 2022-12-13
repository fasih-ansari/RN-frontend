import React, {useState} from 'react';
import {
  Text,
  Button,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Alert,
  NavigationContainer,
  View,
  TouchableOpacity,
} from 'react-native';

export default function Login({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [titleText] = useState('LogIn');
  const [loginText] = useState('LogIn');
  const [passwordText] = useState('Password');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>{titleText}</Text>
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
      <TouchableOpacity style={styles.btnStyle}>
        <Text>Press</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'black',
    height: 50,
    marginHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 20,
    shadowColor: 'black',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'red',
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
});
