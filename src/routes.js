import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Launches from './pages/Launches';
import Home from './pages/Home';
import LauncheDetails from './pages/LauncheDetails';
import ArticleWebView from './pages/ArticleWebView';
import MissionVideo from './pages/MissionVideo';

const Main = createStackNavigator();
const Modal = createStackNavigator();

function MainStack() {
  return (
    <Main.Navigator initialRouteName="Launches" headerMode="none">
      <Main.Screen name="Launches" component={Launches} />
      <Main.Screen name="Home" component={Home} />
    </Main.Navigator>
  );
}

export default function Routes() {
  return (
    <Modal.Navigator
      screenOptions={{
        headerTintColor: '#2C3E50',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#fece2e'},
      }}
      mode="modal">
      <Modal.Screen
        options={{
          headerShown: false,
        }}
        name="Main"
        component={MainStack}
      />
      <Modal.Screen
        options={{
          headerShown: false,
        }}
        name="LauncheDetails"
        component={LauncheDetails}
      />
      <Modal.Screen
        name="ArticleWebView"
        component={ArticleWebView}
        options={{title: 'Artigo '}}
      />
      <Modal.Screen
        name="MissionVideo"
        component={MissionVideo}
        options={{title: 'Vídeo '}}
      />
    </Modal.Navigator>
  );
}
