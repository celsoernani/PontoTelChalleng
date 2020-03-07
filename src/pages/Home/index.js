import React from 'react';
import {Button, View, Text, StatusBar} from 'react-native';
// import { Container } from './styles';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar barStyle="light-content" backgroundColor="#2C3E50" />

      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Launches')}
      />
    </View>
  );
}
