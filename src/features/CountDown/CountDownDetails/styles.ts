import { StyleSheet } from 'react-native';
import { normalize } from 'share/scale';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemMargin: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  name: {
    marginTop: 20,
    fontSize: normalize(20),
  },
  dateTimeCount: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTime: {
    width: '80%',
    alignItems: 'center',
  },
  dateTimeDetails: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default styles;
