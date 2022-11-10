import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
