// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './DashboardScreen';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';
import { AuthProvider } from './AuthContext';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registration">
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default Navigation;
