import React from 'react';
import {Button, View, Text} from 'react-native';

// import { Container } from './styles';

export default function Launches({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Lauch Screen</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home')}
      />
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}
