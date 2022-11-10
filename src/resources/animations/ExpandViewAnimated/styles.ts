import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT } from 'share/scale';

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
  },
  listView: {
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.27,
    elevation: 14,
  },
  backDrop: {
    flex: 1,
  },
});

export default styles;
