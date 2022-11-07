import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_NAME } from './utils';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeNavigation from './Home';
import AddReminder from 'features/Dashboard/AddReminder';

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
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name="AddReminder" component={AddReminder} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default AppNavigators;
