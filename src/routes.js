import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Launches from './pages/Launches';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Launches"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#F7C315',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#2C3E50'},
      }}>
      <Stack.Screen name="Launches" component={Launches} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
