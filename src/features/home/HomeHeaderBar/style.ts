import { StyleSheet } from 'react-native';
import { normalize, SCREEN_HEIGHT } from 'share/scale';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: SCREEN_HEIGHT * 0.05,
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 3,
  },
  right: {
    flex: 1,
  },
  centerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    width: 'auto',
    textTransform: 'capitalize',
    fontSize: normalize(18),
    marginRight: 5,
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
