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
    marginRight: 5,
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
