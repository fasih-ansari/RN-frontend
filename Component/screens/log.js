import React from 'react';
import {
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import styles from '../styles';

export default function Login({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Please LogIn To Your Account.</Text>
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
      <TouchableOpacity style={styles.btnStyle} onPress={()=>navigation.navigate('Register')}>
        <Text>LogIn</Text>
      </TouchableOpacity>
      <Text style={styles.Text} onPress={()=>navigation.navigate('Register')}>register?</Text>
    </SafeAreaView>
  );
}
