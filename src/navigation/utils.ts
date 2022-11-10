import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

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
