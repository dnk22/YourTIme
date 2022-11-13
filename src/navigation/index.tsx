import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ADD_COUNTDOWN, HOME, COUNTDOWN_DETAILS } from './constants';
import HomeNavigation from './Home';
import AddCountDown from 'features/CountDown/AddCountDown';
import CountDownDetails from 'features/CountDown/CountDownDetails';
import { RootStackParamList } from './type';

//set up routes

const RootStack = createNativeStackNavigator<RootStackParamList>();
const appOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

function AppNavigators() {
  return (
    <RootStack.Navigator initialRouteName={HOME} screenOptions={appOptions}>
      <RootStack.Screen name={HOME} component={HomeNavigation} />
      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
          // animation: 'flip',
        }}
      >
        <RootStack.Screen name={ADD_COUNTDOWN} component={AddCountDown} />
        <RootStack.Screen
          name={COUNTDOWN_DETAILS}
          component={CountDownDetails}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default AppNavigators;
