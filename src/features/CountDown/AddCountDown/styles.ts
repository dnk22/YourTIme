import { ModalNavigationHeaderBarDimensions } from './../../../share/scale/index';
import { StyleSheet } from 'react-native';
import { normalize } from 'share/scale';

const groupHeight = normalize(50);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 15,
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
  groupChild: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  groupChildRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
  },
  label: {
    fontSize: normalize(15),
    fontWeight: '500',
  },
  inputName: {
    height: 40,
  },
  inputDesc: {
    marginTop: 10,
    height: 50,
  },
  icon: {
    marginRight: 5,
  },
  categoryAndSoundView: {
    flex: 2,
  },
  colorView: {
    marginHorizontal: 10,
    width: groupHeight,
    height: groupHeight,
    justifyContent: 'center',
  },
  colorPicker: {
    borderWidth: 0.4,
    borderColor: 'gray',
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  dateTimePicker: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: normalize(7),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dateTimeText: {
    fontSize: normalize(15),
  },
  // category modal style
  modalCategoryHeader: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerCategoryTitle: {
    fontSize: normalize(15),
    fontWeight: '500',
  },
  headerCategoryActionButton: {
    padding: 10,
    borderRadius: 10,
  },
  headerCategoryActionText: {
    fontSize: normalize(15),
    color: 'white',
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: normalize(40),
    zIndex: 100,
  },
  actionConfirm: {
    width: '90%',
    borderRadius: normalize(10),
    alignItems: 'center',
    paddingVertical: normalize(15),
    marginHorizontal: normalize(20),
  },
  textButtonConfirm: {
    fontSize: ModalNavigationHeaderBarDimensions.actionFontSize,
    color: 'white',
  },
});

export default styles;
