import { StyleSheet } from 'react-native';
import { normalize } from 'share/scale';

export const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    paddingBottom: normalize(20),
  },
  modalView: {
    flexDirection: 'column',
    borderRadius: 20,
    padding: normalize(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalAction: {
    alignItems: 'flex-end',
    paddingHorizontal: normalize(10),
    marginBottom: 20,
  },
});
