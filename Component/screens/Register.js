import React from 'react';
import {Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import styles from '../styles';

export default function Register({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Register Here!</Text>
      <Text style={styles.Text}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter your username"
        value={text}
      />
      <Text style={styles.Text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter your email"
        value={text}
      />
      <Text style={styles.Text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Enter your password"
      />
      <Text style={styles.Text}>CNIC</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter your CNIC"
        value={text}
      />
      <Text style={styles.Text}>Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter your username"
        value={text}
      />
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate('Login')}>
        <Text>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
