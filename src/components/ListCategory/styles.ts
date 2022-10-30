import { StyleSheet } from 'react-native';
import { normalize, SCREEN_HEIGHT } from 'utils/system';

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
  },
  listView: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  backDrop: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  itemIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: normalize(16),
  },
});

export default styles;
