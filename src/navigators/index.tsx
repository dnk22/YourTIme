import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import Settings from '../screens/settings';
import { ROUTE_NAME } from './utils';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const options: NativeStackNavigationOptions = {
  headerShown: false,
};
const Stack = createNativeStackNavigator();

function AppNavigators() {
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAME.HOME} screenOptions={options}>
      <Stack.Screen name={ROUTE_NAME.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTE_NAME.SETTINGS} component={Settings} />
    </Stack.Navigator>
  );
}

export default AppNavigators;
