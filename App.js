import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import PurchaseScreen from './src/screens/PurchaseScreen';
import {BookDataProvider} from './src/context/BookStoreContext';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/Signup';
import Index from './Source/screens/Index';
import {Provider as PaperProvider} from 'react-native-paper';
import Animation from './Source/screens/Animated';

const Stack = createNativeStackNavigator();

const navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Animation"
          component={Animation}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen
          name="Index"
          component={Index}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Purchase"
          component={PurchaseScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = navigator;

export default () => {
  return (
    <BookDataProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
    </BookDataProvider>
  );
};
