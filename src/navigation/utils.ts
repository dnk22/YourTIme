/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */

import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const ROUTE_NAME = {
  HOME: 'home',
  DASHBOARD: 'dashboard',
  RECORDS: 'records',
  SETTINGS: 'settings',
};

type RootStackParamList = {
  home: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
export const navigate = (name: any, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const navigateAndReset = (routes = [], index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
  }
};

export const navigateAndSimpleReset = (name, index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      }),
    );
  }
};
