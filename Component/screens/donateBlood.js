import { useState } from 'react';
import React from 'react';
import {Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import styles from '../styles';

import DropDownPicker from 'react-native-dropdown-picker';

export default function Donate({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'A RhD positive (A+)', value: 'A+'},
    {label: 'A RhD negative (A-)',value: 'A-'},
    {label: 'B RhD positive (B+)', value: 'B+'},
    {label: 'B RhD negative (B-)', value: 'B-'},
    {label: '0 RhD positive (O+)', value: 'O+'},
    {label: 'O RhD negative (O-)', value: 'O-'},
    {label: 'AB RhD positive (AB+)', value: 'AB+'},
    {label: 'AB RhD negative (AB-)',value: 'AB-'},
  
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Register Here!</Text>
      <Text style={styles.Text}>Name</Text>
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
       <Text style={styles.Text}>Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter your email"
        value={text}
      />
       <Text style={styles.Text}>Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter your email"
        value={text}
      />
       <Text style={styles.Text}>Select Blood Group</Text>

<DropDownPicker
      style={styles.donorForm}
      placeholder="Select Blood "
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
     
      
      <TouchableOpacity
        style={styles.submit}
       >
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
