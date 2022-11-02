import * as React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeBottomBar from './HomeBottomBar';
import Lottie from 'lottie-react-native';
import { ROUTE_NAME } from '../utils';

import HomeScreen from 'features/home';
import Records from 'features/records';
import Settings from 'features/settings';

//set up routes
const Tab = createBottomTabNavigator();

// variable
const homeOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const iconStyle = {
  height: 24,
  width: 24,
};

function HomeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={homeOptions}
      initialRouteName={ROUTE_NAME.DASHBOARD}
      tabBar={props => <HomeBottomBar {...props} />}
    >
      <Tab.Screen
        name={ROUTE_NAME.RECORDS}
        options={{
          // @ts-ignore
          tabBarIcon: ({ ref }) => (
            <Lottie
              ref={ref}
              loop={false}
              source={require('assets/lottie/add.icon.json')}
              style={{ width: 36, height: 36 }}
              duration={1000}
              autoPlay={true}
            />
          ),
        }}
        component={Records}
      />
      <Tab.Screen
        name={ROUTE_NAME.DASHBOARD}
        options={{
          // @ts-ignore
          tabBarIcon: ({ ref }) => (
            <Lottie
              ref={ref}
              loop={false}
              source={require('assets/lottie/home.icon.json')}
              style={iconStyle}
              autoPlay={true}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={ROUTE_NAME.SETTINGS}
        options={{
          // @ts-ignore
          tabBarIcon: ({ ref }) => (
            <Lottie
              ref={ref}
              loop={false}
              source={require('assets/lottie/settings.icon.json')}
              style={iconStyle}
              autoPlay={true}
            />
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
}

export default HomeNavigation;
