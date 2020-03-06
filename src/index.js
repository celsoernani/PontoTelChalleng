import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

import {store} from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#2C3E50" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
