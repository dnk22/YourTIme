import { StyleSheet } from 'react-native';
import { DIMENSIONS, SCREEN_WIDTH } from 'share/scale';

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    flexDirection: 'row',
    height: DIMENSIONS.home.navbarHeight,
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 3,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  centerIcon: {
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  textStyle: {
    width: 'auto',
    textTransform: 'capitalize',
    marginRight: 5,
    fontSize: DIMENSIONS.home.title,
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    zIndex: 10,
    position: 'absolute',
    width: SCREEN_WIDTH,
    top: DIMENSIONS.home.navbarHeight,
  },
});

export default styles;
