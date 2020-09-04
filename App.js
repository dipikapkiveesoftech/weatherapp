import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';

import Salon from './screens/Salon';
import ViewDetails from './screens/ViewDetails';
import ContactUs from './screens/ContactUs';
import Search from './screens/Search';
import Showweather from './screens/Showweather';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

function LogoTitle() {
  return <HomeScreen />;
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          title: 'WELCOME',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="LogIn"
        component={LoginScreen}
        options={{
          title: 'LogIn',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          title: 'SignUp',

          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      

      <Stack.Screen
        name="SHOWWEATHER"
        component={Showweather}
        options={{
          title: 'Enter Details',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="PROFILE"
        component={Profile}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="SALON"
        component={Salon}
        options={{
          title: 'Salon',

          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ViewDetails"
        component={ViewDetails}
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="CONTACT US"
        component={ContactUs}
        options={{
          title: 'Contact Us',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Weather',
          headerStyle: {
            backgroundColor: '#332726',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}
