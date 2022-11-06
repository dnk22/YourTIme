import { StyleSheet } from 'react-native';
import { normalize } from '../../share/scale/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  group: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  groupRow: {
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputName: {
    height: 30,
    marginBottom: 10,
  },
  inputDesc: {
    height: 40,
  },
  groupChild: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  sound: {
    height: normalize(50),
    width: normalize(140),
  },
  category: {
    height: normalize(50),
    width: normalize(140),
  },
  textSound: {
    marginLeft: 5,
  },
  colorPicker: {
    width: normalize(50),
    height: normalize(50),
    justifyContent: 'center',
  },
  timeTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTime: {
    fontSize: normalize(14),
    fontWeight: '500',
  },
  groupChildRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateTimeArea: {
    flexDirection: 'row',
  },
  dateTimePicker: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: normalize(5),
    borderRadius: normalize(7),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dateTimeText: {
    fontSize: normalize(15),
  },
  loop: {
    marginTop: 10,
  },
  //
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
export default styles;
