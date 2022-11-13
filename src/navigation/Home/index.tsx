import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeBottomBar from './HomeBottomBar';
import Lottie from 'lottie-react-native';
import { DASHBOARD, RECORDS, SETTINGS } from 'navigation/constants';

import Dashboard from 'features/CountDown';
import Tools from 'features/Tools';
import Settings from 'features/Settings';

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
      initialRouteName={DASHBOARD}
      tabBar={props => <HomeBottomBar {...props} />}
    >
      <Tab.Screen
        name={RECORDS}
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
        component={Tools}
      />
      <Tab.Screen
        name={DASHBOARD}
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
        component={Dashboard}
      />
      <Tab.Screen
        name={SETTINGS}
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
