import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_NAME } from './utils';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeTabs from './HomeTab';

//set up routes
const Stack = createNativeStackNavigator();

const appOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

function AppNavigators() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE_NAME.HOME}
      screenOptions={appOptions}
    >
      <Stack.Screen name={ROUTE_NAME.HOME} component={HomeTabs} />
    </Stack.Navigator>
  );
}

export default AppNavigators;
