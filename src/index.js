import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import './config/ReactotronConfig';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text> Text</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
