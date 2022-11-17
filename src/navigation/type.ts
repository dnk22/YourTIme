import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ADD_COUNTDOWN, HOME, COUNTDOWN_DETAILS } from './constants';

export type RootStackParamList = {
  [HOME]: undefined;
  [ADD_COUNTDOWN]: undefined;
  [COUNTDOWN_DETAILS]: { countDownId: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
