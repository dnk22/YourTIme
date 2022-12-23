import { StyleSheet } from 'react-native';
import { normalize } from 'share/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  editButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 50,
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '90%',
    alignItems: 'center',
  },
  dateTimeDetails: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pinItem: {
    // maxWidth: '25%',
    alignItems: 'center',
    padding: 5,
    margin: 2.5,
    borderRadius: 5,
  },
});
export default styles;
