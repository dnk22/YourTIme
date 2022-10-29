import * as React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import BottomBar from 'components/BottomBar';
import Lottie from 'lottie-react-native';
import { ROUTE_NAME } from './utils';

import HomeScreen from 'screens/home';
import Records from 'screens/records';
import Settings from 'screens/settings';

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

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={homeOptions}
      tabBar={props => <BottomBar {...props} />}
    >
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

export default HomeTabs;
