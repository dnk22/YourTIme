import { StyleSheet } from 'react-native';
import { normalize, DIMENSIONS } from 'share/scale';

export const pinStyles = StyleSheet.create({
  countdownView: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  itemCount: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textState: {
    fontSize: normalize(24),
  },
  itemCountValue: {
    marginBottom: 5,
    fontSize: DIMENSIONS.home.reminderItem.fontSizeDateTimeCount,
  },
});

export const normalStyles = StyleSheet.create({
  countdownView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  itemCountDetail: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  itemCountValue: {
    marginRight: 3,
    fontSize: normalize(14),
  },
});
