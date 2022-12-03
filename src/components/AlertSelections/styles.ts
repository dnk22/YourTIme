import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
  },
  header: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 0.5,
  },
  content: {
    maxHeight: 250,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  alertItem: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  alertItemIcon: {
    marginRight: 5,
  },
  alertItemText: {
    fontWeight: '500',
    fontSize: 16,
  },
  alertItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addItem: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.5,
  },
  textStrike: {
    height: 1,
    position: 'absolute',
    top: '50%',
  },
  formInput: {
    height: 50,
    padding: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 0.2,
  },
});
export default styles;
