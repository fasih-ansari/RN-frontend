import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/file1';
import Register from './components/file2';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Register" component={Register} />
       </Stack.Navigator>
    </NavigationContainer>
  );
};

// function Login({navigation}) {
//   const [text, onChangeText] = React.useState(null);
//   const [password, onChangePassword] = React.useState(null);
//   const [titleText] = useState('LogIn');
//   const [loginText] = useState('LogIn');
//   const [passwordText] = useState('Password');

//   return (
//     <NavigationContainer>
//     <SafeAreaView style={styles.container}>
//       <Text style= {styles.titleText}>{titleText}</Text>
//       <Text>{loginText}</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         placeholder="Enter your email"
//         value={text}
//       />
//       <Text>{passwordText}</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangePassword}
//         value={password}
//         placeholder="Enter your password"
//       />
//       <Button style={styles.btn}
//         title="LogIn"
//         onPress={() => navigation.navigate('Register')}
//       />
//     </SafeAreaView>
//     </NavigationContainer>
//   );
// };

// function Register({navigation}){
//   const [text, onChangeText] = React.useState(null);
//   const [password, onChangePassword] = React.useState(null);
//   const [titleText] = useState('LogIn');
//   const [loginText] = useState('LogIn');
//   const [passwordText] = useState('Password');
//   return(
//     <SafeAreaView style={styles.container}>
//       <Text style= {styles.titleText}>{titleText}</Text>
//       <Text>{loginText}</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         placeholder="Enter your email"
//         value={text}
//       />
//       <Text>{passwordText}</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangePassword}
//         value={password}
//         placeholder="Enter your password"
//       />
//       <Button style={styles.btn}
//         title="Register"
//         onPress={() => navigation.navigate('Login')}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   titleText: {
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     marginTop: 20,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
