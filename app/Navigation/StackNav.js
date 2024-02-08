import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppInto from '../Screens/AppInto';
import Home from '../Screens/Home';
import MusicPlayer from '../Screens/Player';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AppIntro" component={AppInto} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Player" component={MusicPlayer} />
    </Stack.Navigator>
  );
};

export default StackNav;
