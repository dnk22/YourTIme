import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerBar: {
    zIndex: 9,
    position: 'absolute',
    height: 40,
    alignItems: 'center',
  },
  popup: {
    zIndex: 10,
    position: 'absolute',
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default styles;
