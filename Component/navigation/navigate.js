import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../auth/Register';
import Blood from '../screens/Blood';
import Donate from '../screens/donateBlood';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from '../screens/SplashScreen';
import Welcome from '../auth/Welcome';
import LogIn from '../auth/Login';
const Stack = createNativeStackNavigator();
export default function RootNavigation (){
  return (
    <SafeAreaProvider>
    <SplashScreen/>
    <NavigationContainer>

      <Stack.Navigator>
    
      <Stack.Screen
          name="Welcome"
          component={Welcome}
       
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
       
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Blood" component={Blood}  options={{ headerShown: false }} />
      <Stack.Screen name="Donate" component={Donate} options={{ headerShown: false }} />
      
        
       </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};
