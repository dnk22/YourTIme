import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeNavigation from './Home';
import AddCountDown from 'features/CountDown/AddCountDown';
import { ROUTE_NAME } from './constants';

//set up routes
const RootStack = createNativeStackNavigator();

const appOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

function AppNavigators() {
  return (
    <RootStack.Navigator
      initialRouteName={ROUTE_NAME.HOME}
      screenOptions={appOptions}
    >
      <RootStack.Screen name={ROUTE_NAME.HOME} component={HomeNavigation} />
      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
          // animation: 'flip',
        }}
      >
        <RootStack.Screen
          name={ROUTE_NAME.ADD_COUNTDOWN}
          component={AddCountDown}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default AppNavigators;
